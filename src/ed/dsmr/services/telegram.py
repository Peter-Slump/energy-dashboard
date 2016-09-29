from decimal import Decimal

from django.utils.translation import ugettext as _
from dsmr_parser.obis_references import (
    P1_MESSAGE_HEADER,
    P1_MESSAGE_TIMESTAMP,
    ELECTRICITY_USED_TARIFF_1,
    ELECTRICITY_USED_TARIFF_2,
    ELECTRICITY_DELIVERED_TARIFF_1,
    ELECTRICITY_DELIVERED_TARIFF_2,
    ELECTRICITY_ACTIVE_TARIFF,
    CURRENT_ELECTRICITY_USAGE,
    CURRENT_ELECTRICITY_DELIVERY,
    EQUIPMENT_IDENTIFIER,
    EQUIPMENT_IDENTIFIER_GAS,
    HOURLY_GAS_METER_READING,
)
from dsmr_parser.parsers import (
    CosemParser,
    MBusParser,
    TelegramParser,
    ValueParser,
)
from dsmr_parser.value_types import timestamp

from ed.back_end.models import PowerMeter
from ed.dsmr.models import DSMRPowerMeter

import ed.back_end.services


TARIFF_DAY = 2
TARIFF_NIGHT = 1


SPECIFICATION = {
    P1_MESSAGE_HEADER: CosemParser(ValueParser(str)),
    P1_MESSAGE_TIMESTAMP: CosemParser(ValueParser(timestamp)),
    ELECTRICITY_USED_TARIFF_1: CosemParser(ValueParser(float)),
    ELECTRICITY_USED_TARIFF_2: CosemParser(ValueParser(float)),
    ELECTRICITY_DELIVERED_TARIFF_1: CosemParser(ValueParser(float)),
    ELECTRICITY_DELIVERED_TARIFF_2: CosemParser(ValueParser(float)),
    ELECTRICITY_ACTIVE_TARIFF: CosemParser(ValueParser(str)),
    EQUIPMENT_IDENTIFIER: CosemParser(ValueParser(str)),
    EQUIPMENT_IDENTIFIER_GAS: CosemParser(ValueParser(str)),
    HOURLY_GAS_METER_READING: MBusParser(ValueParser(timestamp),
                                         ValueParser(float)),
    CURRENT_ELECTRICITY_USAGE: CosemParser(ValueParser(Decimal)),
    CURRENT_ELECTRICITY_DELIVERY: CosemParser(ValueParser(Decimal)),
}


def parse(user, telegram):
    """
    Parse a DSMR telegram and log the values in the appropriate places in the
    database.

    :param django.contrib.auth.models.User user:
    :param str telegram:
    """
    parser = TelegramParser(SPECIFICATION)
    parsed_telegram = parser.parse(telegram.split("\r\n"))

    log_consumed_electricity(user=user, parsed_telegram=parsed_telegram)
    log_produced_energy(user=user, parsed_telegram=parsed_telegram)
    log_consumed_gas(user=user, parsed_telegram=parsed_telegram)


def log_consumed_electricity(user, parsed_telegram):
    """
    Log consumed electricity to the database

    :param django.contrib.auth.models.User user:
    :param dict parsed_telegram:
    :rtype: ed.back_end.models.Reading
    """
    current_tariff = parsed_telegram.get(ELECTRICITY_ACTIVE_TARIFF).value
    message_datetime = parsed_telegram[P1_MESSAGE_TIMESTAMP].value
    current_consumption = parsed_telegram[CURRENT_ELECTRICITY_USAGE].value

    if int(current_tariff) == TARIFF_DAY:
        value_total = parsed_telegram[ELECTRICITY_USED_TARIFF_2].value

        if value_total < 0.001:
            return

        power_meter = get_or_create_power_meter(
            user=user,
            meter_id=parsed_telegram[EQUIPMENT_IDENTIFIER].value,
            type_=DSMRPowerMeter.TYPE_CONSUMED_ELECTRICITY_TARIFF_2,
            name=_('Consumed electricity (day)'),
            unit=PowerMeter.UNIT_KWH
        )

    elif int(current_tariff) == TARIFF_NIGHT:
        value_total = parsed_telegram[ELECTRICITY_USED_TARIFF_1].value

        if value_total < 0.001:
            return

        power_meter = get_or_create_power_meter(
            user=user,
            meter_id=parsed_telegram[EQUIPMENT_IDENTIFIER].value,
            type_=DSMRPowerMeter.TYPE_CONSUMED_ELECTRICITY_TARIFF_1,
            name=_('Consumed electricity (night)'),
            unit=PowerMeter.UNIT_KWH
        )
    else:
        return

    return ed.back_end.services.add_reading(
        power_meter=power_meter.power_meter,
        value_total=value_total,
        datetime=message_datetime,
        current_value=current_consumption
    )


def log_produced_energy(user, parsed_telegram):
    """
    Log produced energy as readed from the meter.

    There are two tariff's one for daytime and one for night. Values will only
    be logged in the database if there is an actual reading (greater than 0)

    :param django.contrib.auth.models.User user:
    :param dict parsed_telegram:
    :rtype: ed.back_end.models.Reading or None
    """
    current_tariff = parsed_telegram.get(ELECTRICITY_ACTIVE_TARIFF).value

    if int(current_tariff) == TARIFF_DAY:
        value_total = parsed_telegram[ELECTRICITY_DELIVERED_TARIFF_2].value

        if value_total < 0.001:
            return

        power_meter = get_or_create_power_meter(
            user=user,
            meter_id=parsed_telegram[EQUIPMENT_IDENTIFIER].value,
            type_=DSMRPowerMeter.TYPE_PRODUCED_ELECTRICITY_TARIFF_2,
            name=_('Produced electricity (day)'),
            unit=PowerMeter.UNIT_KWH
        )

    elif int(current_tariff) == TARIFF_NIGHT:

        value_total = parsed_telegram[ELECTRICITY_DELIVERED_TARIFF_1].value

        if value_total < 0.001:
            return

        power_meter = get_or_create_power_meter(
            user=user,
            meter_id=parsed_telegram[EQUIPMENT_IDENTIFIER].value,
            type_=DSMRPowerMeter.TYPE_PRODUCED_ELECTRICITY_TARIFF_1,
            name=_('Produced electricity (night)'),
            unit=PowerMeter.UNIT_KWH
        )

    else:
        return

    message_datetime = parsed_telegram[P1_MESSAGE_TIMESTAMP].value
    current_delivery = parsed_telegram[CURRENT_ELECTRICITY_DELIVERY].value

    return ed.back_end.services.add_reading(
        power_meter=power_meter.power_meter,
        value_total=value_total,
        datetime=message_datetime,
        current_value=current_delivery
    )


def log_consumed_gas(user, parsed_telegram):
    """
    Log the consumption of the Gas meter.

    :param django.contrib.auth.models.User user:
    :param dict parsed_telegram:
    :rtype: ed.back_end.models.Reading
    """
    reading_datetime = parsed_telegram[HOURLY_GAS_METER_READING].datetime

    power_meter = get_or_create_power_meter(
        user=user,
        meter_id=parsed_telegram[EQUIPMENT_IDENTIFIER_GAS].value,
        type_=DSMRPowerMeter.TYPE_CONSUMED_GAS,
        name=_('Consumed gas'),
        unit=PowerMeter.UNIT_M3
    )

    ed.back_end.services.add_reading(
        power_meter=power_meter.power_meter,
        value_total=parsed_telegram[HOURLY_GAS_METER_READING].value,
        datetime=reading_datetime
    )


def get_or_create_power_meter(user, meter_id, type_, name, unit):
    """
    Get or create a DSMR power meter.

    :param django.contrib.auth.models.User user:
    :param str meter_id: Identifier of the power meter
    :param str type_: One of the choices on the DSMRPowerMeter model.
    :param str name: The name which will be used to create the PowerMeter
    :param str unit: The unit for the values stored in readings of the PowerMeter
    :return: The DSMR Power Meter
    :rtype: ed.dsmr.models.DSMRPowerMeter
    """
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
