from django.db import models, connection


class Reading(models.Model):
    datetime = models.DateTimeField(unique=True)

    class Meta:
        abstract = True


class ElectricityReportsQuerySet(models.QuerySet):

    def actual(self):
        return getattr(self.last(), 'actual', None)


class ElectricityUsedReportsQuerySet(ElectricityReportsQuerySet):

    def used(self, start, end, aggregate=None):

        if aggregate is None:
            aggregate = 'hour'

        cursor = connection.cursor()
        cursor.execute("""
            SELECT datetime((strftime('%s', datetime) / 3600) * 3600, 'unixepoch') interval,
                   MAX(total)-MIN(total)
            FROM logger_electricityusedreading
            GROUP BY interval
        """)

        return cursor.fetchall()


class GasUsedReportsQuerySet(models.QuerySet):

    def used(self, start, end, aggregate=None):

        if aggregate is None:
            aggregate = 'hour'

        cursor = connection.cursor()
        cursor.execute("""
            SELECT datetime((strftime('%s', datetime) / 86400) * 86400, 'unixepoch') interval,
                   MAX(total)-MIN(total)
            FROM logger_gasreading
            GROUP BY interval
        """)

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
