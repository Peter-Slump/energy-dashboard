from django.db import models


class DSMRPowerMeter(models.Model):

    TYPE_CONSUMED_ELECTRICITY_DAY = 'consumed-electricity-day'
    TYPE_CONSUMED_ELECTRICITY_NIGHT = 'consumed-electricity-night'
    TYPE_PRODUCED_ELECTRICITY_DAY = 'produced-electricity-day'
    TYPE_PRODUCED_ELECTRICITY_NIGHT = 'produced-electricity-night'
    TYPE_CONSUMED_GAS = 'consumed-gas'

    ALL_TYPES = (
        TYPE_CONSUMED_ELECTRICITY_DAY,
        TYPE_CONSUMED_ELECTRICITY_NIGHT,
        TYPE_PRODUCED_ELECTRICITY_DAY,
        TYPE_PRODUCED_ELECTRICITY_NIGHT,
        TYPE_CONSUMED_GAS
    )

    power_meter = models.ForeignKey('')
    meter_id = models.CharField(max_length=255)
    type = models.CharField(max_length=50, choices=ALL_TYPES)