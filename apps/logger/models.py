from django.db import models


class Reading(models.Model):
    datetime = models.DateTimeField(unique=True)

    class Meta:
        abstract = True


class ElectricityUsedReading(Reading):
    tariff = models.SmallIntegerField(db_index=True)
    total = models.FloatField()
    actual = models.FloatField()


class ElectricityDeliveredReading(Reading):
    tariff = models.SmallIntegerField(db_index=True)
    total = models.FloatField()
    actual = models.FloatField()


class GasReading(Reading):
    total_usage = models.FloatField()
