from django.utils.translation import ugettext as _
from dsmr_reader.obis_references import *
from dsmr_reader.parsing import (
    CosemParser,
    MBusParser,
    TelegramParser,
    ValueParser,
)
from dsmr_reader.value_types import timestamp

from energy_dashboard.back_end.models import PowerMeter, Reading
from energy_dashboard.dsmr.models import DSMRPowerMeter

import energy_dashboard.back_end.services


TARIFF_DAY = 1
TARIFF_NIGHT = 2


SPECIFICATION = {
    P1_MESSAGE_HEADER: CosemParser(ValueParser(str)),
    P1_MESSAGE_TIMESTAMP: CosemParser(ValueParser(timestamp)),
    ELECTRICITY_USED_TARIFF_1 : CosemParser(ValueParser(float)),
    ELECTRICITY_USED_TARIFF_2: CosemParser(ValueParser(float)),
    ELECTRICITY_DELIVERED_TARIFF_1: CosemParser(ValueParser(float)),
    ELECTRICITY_DELIVERED_TARIFF_2: CosemParser(ValueParser(float)),
    ELECTRICITY_ACTIVE_TARIFF: CosemParser(ValueParser(str)),
    EQUIPMENT_IDENTIFIER: CosemParser(ValueParser(str)),
    EQUIPMENT_IDENTIFIER_GAS: CosemParser(ValueParser(str)),
    HOURLY_GAS_METER_READING: MBusParser(ValueParser(timestamp),
                                         ValueParser(float))
}


def parse(user, telegram):
    parser = TelegramParser(SPECIFICATION)
    parsed_telegram = parser.parse(telegram.split("\r\n"))

    log_consumed_electricity(user=user, parsed_telegram=parsed_telegram)
    log_produced_energy(user=user, parsed_telegram=parsed_telegram)
    log_consumed_gas(user=user, parsed_telegram=parsed_telegram)


def log_consumed_electricity(user, parsed_telegram):
    current_tariff = parsed_telegram.get(ELECTRICITY_ACTIVE_TARIFF).value
    message_datetime = parsed_telegram[P1_MESSAGE_TIMESTAMP].value

    # Handle Electricity day
    if int(current_tariff) == TARIFF_DAY:
        power_meter = get_or_create_power_meter(
            user=user,
            meter_id=parsed_telegram[EQUIPMENT_IDENTIFIER].value,
            type_=DSMRPowerMeter.TYPE_CONSUMED_ELECTRICITY_DAY,
            name=_('Consumed electricity (day)'),
            unit=PowerMeter.UNIT_KWH
        )

        energy_dashboard.back_end.services.add_reading(
            power_meter=power_meter.power_meter,
            value_total=parsed_telegram[ELECTRICITY_USED_TARIFF_1].value,
            datetime=message_datetime
        )
    elif int(current_tariff) == TARIFF_NIGHT:
        power_meter = get_or_create_power_meter(
            user=user,
            meter_id=parsed_telegram[EQUIPMENT_IDENTIFIER].value,
            type_=DSMRPowerMeter.TYPE_CONSUMED_ELECTRICITY_NIGHT,
            name=_('Consumed electricity (night)'),
            unit=PowerMeter.UNIT_KWH
        )

        energy_dashboard.back_end.services.add_reading(
            power_meter=power_meter.power_meter,
            value_total=parsed_telegram[ELECTRICITY_USED_TARIFF_2].value,
            datetime=message_datetime
        )


def log_produced_energy(user, parsed_telegram):
    current_tariff = parsed_telegram.get(ELECTRICITY_ACTIVE_TARIFF).value
    message_datetime = parsed_telegram[P1_MESSAGE_TIMESTAMP].value

    # Handle Electricity day
    if int(current_tariff) == TARIFF_DAY and \
            parsed_telegram[ELECTRICITY_DELIVERED_TARIFF_1].value > 0:

        power_meter = get_or_create_power_meter(
            user=user,
            meter_id=parsed_telegram[EQUIPMENT_IDENTIFIER].value,
            type_=DSMRPowerMeter.TYPE_PRODUCED_ELECTRICITY_DAY,
            name=_('Produced electricity (day)'),
            unit=PowerMeter.UNIT_KWH
        )

        energy_dashboard.back_end.services.add_reading(
            power_meter=power_meter.power_meter,
            value_total=parsed_telegram[ELECTRICITY_DELIVERED_TARIFF_1].value,
            datetime=message_datetime
        )
    elif int(current_tariff) == TARIFF_NIGHT and \
            parsed_telegram[ELECTRICITY_DELIVERED_TARIFF_2].value > 0:

        power_meter = get_or_create_power_meter(
            user=user,
            meter_id=parsed_telegram[EQUIPMENT_IDENTIFIER].value,
            type_=DSMRPowerMeter.TYPE_PRODUCED_ELECTRICITY_NIGHT,
            name=_('Produced electricity (night)'),
            unit=PowerMeter.UNIT_KWH
        )

        energy_dashboard.back_end.services.add_reading(
            power_meter=power_meter.power_meter,
            value_total=parsed_telegram[ELECTRICITY_DELIVERED_TARIFF_2].value,
            datetime=message_datetime
        )


def log_consumed_gas(user, parsed_telegram):
    reading_datetime = parsed_telegram[HOURLY_GAS_METER_READING].datetime

    power_meter = get_or_create_power_meter(
        user=user,
        meter_id=parsed_telegram[EQUIPMENT_IDENTIFIER_GAS].value,
        type_=DSMRPowerMeter.TYPE_CONSUMED_GAS,
        name=_('Consumed gas'),
        unit=PowerMeter.UNIT_M3
    )

    energy_dashboard.back_end.services.add_reading(
        power_meter=power_meter.power_meter,
        value_total=parsed_telegram[HOURLY_GAS_METER_READING].value,
        datetime=reading_datetime
    )


def get_or_create_power_meter(user, meter_id, type_, name, unit):
    try:
        return DSMRPowerMeter.objects.get(power_meter__owner=user,
                                          meter_id=meter_id,
                                          type=type_)
    except DSMRPowerMeter.DoesNotExist:

        # Create power meter
        power_meter = PowerMeter.objects.create(
            owner=user,
            name=name,
            unit=unit
        )
        return DSMRPowerMeter.objects.create(power_meter=power_meter,
                                             meter_id=meter_id,
                                             type=type_)
