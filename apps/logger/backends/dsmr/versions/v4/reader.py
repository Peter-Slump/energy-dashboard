import serial

from apps.logger.backends.dsmr.obis_references import ELECTRICITY_ACTIVE_TARIFF, \
    CURRENT_ELECTRICITY_USAGE, ELECTRICITY_DELIVERED_TARIFF_ALL, \
    CURRENT_ELECTRICITY_DELIVERY, HOURLY_GAS_METER_READING
from apps.logger.backends.dsmr.obis_references import P1_MESSAGE_TIMESTAMP, \
    ELECTRICITY_USED_TARIFF_ALL
from apps.logger.backends.dsmr.parsing import TelegramParser
from apps.logger.backends.dsmr.versions.base_reader import BaseSerialReader
from apps.logger.backends.dsmr.versions.v4 import SPECIFICATION
from apps.logger.models import ElectricityDeliveredReading
from apps.logger.models import ElectricityUsedReading, GasReading


class Reader(BaseSerialReader):

    def __init__(self, *args, **kwargs):
        super(Reader, self).__init__(*args, **kwargs)

        self.telegram_parser = TelegramParser(SPECIFICATION)

    @property
    def _serial_settings(self):
        return {
            'baudrate': 115200,
            'bytesize': serial.SEVENBITS,
            'parity': serial.PARITY_EVEN,
            'stopbits': serial.STOPBITS_ONE,
            'xonxoff': 0,
            'rtscts': 0,
            'timeout': 20
        }

    @property
    def read(self):

        for telegram in self._serial_read():
            telegram = self.telegram_parser.parse(telegram)

            message_datetime = telegram[P1_MESSAGE_TIMESTAMP]

            tariff = telegram[ELECTRICITY_ACTIVE_TARIFF]
            tariff = int(tariff.value)

            electricity_used_total \
                = telegram[ELECTRICITY_USED_TARIFF_ALL[tariff - 1]]
            electricity_used_actual \
                = telegram[CURRENT_ELECTRICITY_USAGE]

            electricity_delivered_total = \
                telegram[ELECTRICITY_DELIVERED_TARIFF_ALL[tariff - 1]]
            electricity_delivered_actual = \
                telegram[CURRENT_ELECTRICITY_DELIVERY]

            gas_reading = telegram[HOURLY_GAS_METER_READING]

            is_new_gas_reading = not GasReading.objects\
                .filter(datetime__gte=gas_reading.datetime)\
                .exists()

            yield ElectricityUsedReading(
                tariff=tariff,
                total=electricity_used_total.value,
                actual=electricity_used_actual.value,
                datetime=message_datetime.value)

            yield ElectricityDeliveredReading(
                tariff=tariff,
                total=electricity_delivered_total.value,
                actual=electricity_delivered_actual.value,
                datetime=message_datetime.value)

            if is_new_gas_reading:
                yield GasReading(
                    total_usage=gas_reading.value,
                    datetime=gas_reading.datetime)
