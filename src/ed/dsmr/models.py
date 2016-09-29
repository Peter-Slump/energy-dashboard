from django.db import models
from django.utils.translation import ugettext as _


class DSMRPowerMeter(models.Model):

    TYPE_CONSUMED_ELECTRICITY_TARIFF_1 = 'consumed-electricity-1'
    TYPE_CONSUMED_ELECTRICITY_TARIFF_2 = 'consumed-electricity-2'
    TYPE_PRODUCED_ELECTRICITY_TARIFF_1 = 'produced-electricity-1'
    TYPE_PRODUCED_ELECTRICITY_TARIFF_2 = 'produced-electricity-2'
    TYPE_CONSUMED_GAS = 'consumed-gas'

    ALL_TYPES = (
        (TYPE_CONSUMED_ELECTRICITY_TARIFF_1, _('Consumed Electricity Night')),
        (TYPE_CONSUMED_ELECTRICITY_TARIFF_2, _('Consumed Electricity Day')),
        (TYPE_PRODUCED_ELECTRICITY_TARIFF_1, _('Produced Electricity Night')),
        (TYPE_PRODUCED_ELECTRICITY_TARIFF_2, _('Produced Electricity Day')),
        (TYPE_CONSUMED_GAS, _('Consumed Gas')),
    )

    power_meter = models.ForeignKey('back_end.PowerMeter')
    meter_id = models.CharField(max_length=255)
    type = models.CharField(max_length=50, choices=ALL_TYPES)
