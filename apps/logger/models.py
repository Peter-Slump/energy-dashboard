from django.db import models, connection


class Reading(models.Model):
    objects = models.Manager()

    datetime = models.DateTimeField(unique=True)

    class Meta:
        abstract = True


class ElectricityReportsQuerySet(models.QuerySet):

    def actual(self):
        return getattr(self.last(), 'actual', None)


class ElectricityUsedReportsQuerySet(ElectricityReportsQuerySet):

    def used(self, start, end, interval=3600):
        cursor = connection.cursor()

        # Currently only aggregate by minute.
        cursor.execute("""
            SELECT strftime('%%Y-%%m-%%dT%%H:%%M:%%S',
                       Datetime((strftime('%%s', r.datetime) / %s) * %s, 'unixepoch')
                   ) interval,
                   printf("%%.2f", SUM(r.total-r2.total)) AS delta,
                   r.tariff
            FROM logger_electricityusedreading r
            LEFT JOIN logger_electricityusedreading AS r2
                ON  r.id - 1 = r2.id
                AND r.tariff = r2.tariff
            WHERE r.datetime >= Datetime(%s)
            AND r.datetime < Datetime(%s)
            GROUP BY interval, r.tariff
        """, [interval,
              interval,
              start.strftime('%Y-%m-%d %H:%M:%S'),
              end.strftime('%Y-%m-%d %H:%M:%S')])

        return cursor.fetchall()


class GasUsedReportsQuerySet(models.QuerySet):

    def used(self, start, end, interval=3600):
        cursor = connection.cursor()

        # Currently only aggregate by hour.
        cursor.execute("""
            SELECT strftime('%%Y-%%m-%%dT%%H:%%M:%%S',
                       Datetime((strftime('%%s', r.datetime) / %s) * %s, 'unixepoch')
                   ) interval,
                   printf("%%.2f", SUM(r.total-r2.total)) AS delta
            FROM logger_gasreading AS r
            INNER JOIN logger_gasreading AS r2 ON r.id - 1 = r2.id
            WHERE r.datetime >= Datetime(%s)
            AND r.datetime < Datetime(%s)
            GROUP BY interval
        """, [interval,
              interval,
              start.strftime('%Y-%m-%d %H:%M:%S'),
              end.strftime('%Y-%m-%d %H:%M:%S')])

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
