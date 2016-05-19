from django.db import models, connection


AGGREGATE_YEAR = 'year'
AGGREGATE_MONTH = 'month'
AGGREGATE_DAY = 'day'
AGGREGATE_HOUR = 'hour'
AGGREGATE_MINUTE = 'minute'

AGGREGATES = {
    AGGREGATE_YEAR: '%%Y-01-01T00:00:00',
    AGGREGATE_MONTH: '%%Y-%%m-01T00:00:00',
    AGGREGATE_DAY: '%%Y-%%m-%%dT00:00:00',
    AGGREGATE_HOUR: '%%Y-%%m-%%dT%%H:00:00',
    AGGREGATE_MINUTE: '%%Y-%%m-%%dT%%H:%%M:00'
}


class Reading(models.Model):
    objects = models.Manager()

    datetime = models.DateTimeField(unique=True)

    class Meta:
        abstract = True


class ElectricityReportsQuerySet(models.QuerySet):

    def actual(self):
        return getattr(self.last(), 'actual', None)


class ElectricityUsedReportsQuerySet(ElectricityReportsQuerySet):

    def used(self, start, end, aggregate_by, split_tariff=False):
        cursor = connection.cursor()

        query = """
            SELECT strftime('{aggregate}', r.datetime) AS start,
                   CAST(
                       printf("%%.2f", SUM(r_next.total-r.total))
                       AS FLOAT
                   ) AS delta
                   {tariff}
            FROM logger_electricityusedreading r
            INNER JOIN logger_electricityusedreading AS r_next
                ON  r.id + 1 = r_next.id
                AND r.tariff = r_next.tariff
                AND r_next.datetime <= Datetime(%s)
            WHERE r.datetime >= Datetime(%s)
            GROUP BY start{tariff}
            ORDER BY start
        """.format(aggregate=AGGREGATES[aggregate_by],
                   tariff=', r.tariff' if split_tariff else '')

        query_parameters = [end.strftime('%Y-%m-%d %H:%M:%S'),
                            start.strftime('%Y-%m-%d %H:%M:%S')]

        cursor.execute(query, query_parameters)

        return cursor.fetchall()


class GasUsedReportsQuerySet(models.QuerySet):

    def used(self, start, end, aggregate_by):
        cursor = connection.cursor()

        query = """
            SELECT strftime('{aggregate}', r.datetime) AS start,
                   CAST(
                       printf("%%.2f", SUM(r_next.total-r.total))
                       AS FLOAT
                   ) AS delta
            FROM logger_gasreading r
            INNER JOIN logger_gasreading AS r_next
                ON  r.id + 1 = r_next.id
                AND r_next.datetime <= Datetime(%s)
            WHERE r.datetime >= Datetime(%s)
            GROUP BY start
            ORDER BY start
        """.format(aggregate=AGGREGATES[aggregate_by])

        query_parameters = [end.strftime('%Y-%m-%d %H:%M:%S'),
                            start.strftime('%Y-%m-%d %H:%M:%S')]

        cursor.execute(query, query_parameters)

        return cursor.fetchall()


class ElectricityUsedReading(Reading):
    reports = ElectricityUsedReportsQuerySet.as_manager()

    tariff = models.SmallIntegerField(db_index=True)
    total = models.FloatField()
    actual = models.FloatField()


class ElectricityDeliveredReading(Reading):
    tariff = models.SmallIntegerField(db_index=True)
    total = models.FloatField()
    actual = models.FloatField()


class GasReading(Reading):
    reports = GasUsedReportsQuerySet.as_manager()

    total = models.FloatField()
