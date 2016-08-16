import mock

from django.test.testcases import TestCase
from django.utils import dateparse

from ed.back_end.factories import UserFactory
from ed.dsmr.models import DSMRPowerMeter
from ed.dsmr.services.telegram import SPECIFICATION
from ed.utils.mixins import MockTestCaseMixin

import ed.dsmr.services.telegram


class DSMRTelegramTestCase(MockTestCaseMixin, TestCase):
    """
    To take care that the unittests makes more sense I used the whole telegram
    service as a unit which get tested in this test case.
    """

    def setUp(self):
        self.user = UserFactory()

        # Setup as a list so test can replace indices with different values.
        self.telegram_list = [
            '/XMX5LGBBFG1009397105',
            '',
            '1-3:0.2.8(42)',
            '0-0:1.0.0(160807223449S)',
            '0-0:96.1.1(123456789)',
            '1-0:1.8.1(000352.211*kWh)',
            '1-0:1.8.2(000422.343*kWh)',
            '1-0:2.8.1(000236.452*kWh)',
            '1-0:2.8.2(000985.525*kWh)',
            '0-0:96.14.0(0001)',
            '1-0:1.7.0(00.262*kW)',
            '1-0:2.7.0(00.000*kW)',
            '0-0:96.7.21(00001)',
            '0-0:96.7.9(00000)',
            '1-0:99.97.0(0)(0-0:96.7.19)',
            '1-0:32.32.0(00000)',
            '1-0:32.36.0(00000)',
            '0-0:96.13.1()',
            '0-0:96.13.0()',
            '1-0:31.7.0(001*A)',
            '1-0:21.7.0(00.262*kW)',
            '1-0:22.7.0(00.000*kW)',
            '0-1:24.1.0(003)',
            '0-1:24.1.0(003)',
            '0-1:96.1.0(987654321)',
            '0-1:24.2.1(160807220000S)(00185.015*m3)',
            '!82DB'
        ]

        self.add_reading_mock = self.setup_mock(
            'ed.back_end.services.add_reading')

    def test_dsmr_day_power_meters_and_gas_meter_are_created(self):
        """
        Case: The telegram get parsed with day meter activated
        Expected: Two DSMRPowerMeter get created for gas and consumed
                  electricity day
        """
        qs_gas = DSMRPowerMeter.objects.filter(
            power_meter__owner=self.user,
            power_meter__unit='m3',
            power_meter__name='Consumed gas',
            meter_id='987654321',
            type='consumed-gas'
        )
        qs_electricity_consumed = DSMRPowerMeter.objects.filter(
            power_meter__owner=self.user,
            power_meter__unit='kwh',
            power_meter__name='Consumed electricity (day)',
            meter_id='123456789',
            type='consumed-electricity-day'
        )
        qs_electricity_produced = DSMRPowerMeter.objects.filter(
            power_meter__owner=self.user,
            power_meter__unit='kwh',
            power_meter__name='Produced electricity (day)',
            meter_id='123456789',
            type='produced-electricity-day'
        )

        self.assertFalse(qs_gas.exists())
        self.assertFalse(qs_electricity_consumed.exists())
        self.assertFalse(qs_electricity_produced.exists())

        ed.dsmr.services.telegram.parse(
            user=self.user,
            telegram='\r\n'.join(self.telegram_list)
        )

        self.assertTrue(qs_gas.exists())
        self.assertTrue(qs_electricity_consumed.exists())
        self.assertTrue(qs_electricity_produced.exists())

    def test_dsmr_night_power_meters_are_created(self):
        """
        Case: The telegram get parsed with night meter activated
        Expected: Two DSMRPowerMeter get created for gas and consumed
                  electricity day
        """
        qs_electricity_consumed = DSMRPowerMeter.objects.filter(
            power_meter__owner=self.user,
            power_meter__unit='kwh',
            power_meter__name='Consumed electricity (night)',
            meter_id='123456789',
            type='consumed-electricity-night'
        )
        qs_electricity_produced = DSMRPowerMeter.objects.filter(
            power_meter__owner=self.user,
            power_meter__unit='kwh',
            power_meter__name='Produced electricity (night)',
            meter_id='123456789',
            type='produced-electricity-night'
        )

        self.assertFalse(qs_electricity_consumed.exists())
        self.assertFalse(qs_electricity_produced.exists())

        telegram_list = self.telegram_list
        telegram_list[9] = '0-0:96.14.0(0002)'  # Set it to night mode

        ed.dsmr.services.telegram.parse(
            user=self.user,
            telegram='\r\n'.join(telegram_list)
        )

        self.assertTrue(qs_electricity_consumed.exists())
        self.assertTrue(qs_electricity_produced.exists())

    def test_reading_is_added_for_day_and_gas(self):
        """
        Case: A telegram get parsed
        Expected: The add reading service get called to log the readings
        """

        ed.dsmr.services.telegram.parse(
            user=self.user,
            telegram='\r\n'.join(self.telegram_list)
        )

        # Test called for consumed electricity day
        ced_meter = DSMRPowerMeter.objects.get(
            power_meter__owner=self.user,
            meter_id='123456789',
            type='consumed-electricity-day'
        )
        ped_meter = DSMRPowerMeter.objects.get(
            power_meter__owner=self.user,
            meter_id='123456789',
            type='produced-electricity-day'
        )
        g_meter = DSMRPowerMeter.objects.get(
            power_meter__owner=self.user,
            meter_id='987654321',
            type='consumed-gas'
        )
        self.add_reading_mock.assert_has_calls([
            mock.call(
                power_meter=ced_meter.power_meter,
                value_total=352.211,
                datetime=dateparse.parse_datetime('2016-08-07T22:34:49+0200')
            ),
            mock.call(
                power_meter=ped_meter.power_meter,
                value_total=236.452,
                datetime=dateparse.parse_datetime('2016-08-07T22:34:49+0200')
            ),
            mock.call(
                power_meter=g_meter.power_meter,
                value_total=185.015,
                datetime=dateparse.parse_datetime('2016-08-07T22:00:00+0200')
            )
        ])

    def test_reading_is_added_for_night(self):
        """
        Case: A telegram get parsed
        Expected: The add reading service get called to log the readings
        """

        telegram_list = self.telegram_list
        telegram_list[9] = '0-0:96.14.0(0002)'  # Set it to night mode

        ed.dsmr.services.telegram.parse(
            user=self.user,
            telegram='\r\n'.join(telegram_list)
        )

        # Test called for consumed electricity night
        ced_meter = DSMRPowerMeter.objects.get(
            power_meter__owner=self.user,
            meter_id='123456789',
            type='consumed-electricity-night'
        )
        ped_meter = DSMRPowerMeter.objects.get(
            power_meter__owner=self.user,
            meter_id='123456789',
            type='produced-electricity-night'
        )
        self.add_reading_mock.assert_has_calls([
            mock.call(
                power_meter=ced_meter.power_meter,
                value_total=422.343,
                datetime=dateparse.parse_datetime('2016-08-07T22:34:49+0200')
            ),
            mock.call(
                power_meter=ped_meter.power_meter,
                value_total=985.525,
                datetime=dateparse.parse_datetime('2016-08-07T22:34:49+0200')
            )
        ])

    def test_log_is_skipped_when_produced_day_value_is_0(self):
        """
        Case: telegram get parsed value for produced is 0
        Expected: value is not logged for that meter
        """
        qs_electricity_produced = DSMRPowerMeter.objects.filter(
            power_meter__owner=self.user,
            power_meter__unit='kwh',
            power_meter__name='Produced electricity (day)',
            meter_id='123456789',
            type='produced-electricity-day'
        )

        self.assertFalse(qs_electricity_produced.exists())

        telegram_list = self.telegram_list
        telegram_list[7] = '1-0:2.8.1(000000.000*kWh)'

        ed.dsmr.services.telegram.parse(
            user=self.user,
            telegram='\r\n'.join(telegram_list)
        )

        self.assertFalse(qs_electricity_produced.exists())

        telegram_list[7] = '1-0:2.8.1(000000.001*kWh)'

        ed.dsmr.services.telegram.parse(
            user=self.user,
            telegram='\r\n'.join(telegram_list)
        )

        self.assertTrue(qs_electricity_produced.exists())

    def test_log_is_skipped_when_produced_night_value_is_0(self):
        """
        Case: telegram get parsed value for produced is 0
        Expected: value is not logged for that meter
        """
        qs_electricity_produced = DSMRPowerMeter.objects.filter(
            power_meter__owner=self.user,
            power_meter__unit='kwh',
            power_meter__name='Produced electricity (night)',
            meter_id='123456789',
            type='produced-electricity-night'
        )

        self.assertFalse(qs_electricity_produced.exists())

        telegram_list = self.telegram_list
        telegram_list[8] = '1-0:2.8.2(000000.000*kWh)'
        telegram_list[9] = '0-0:96.14.0(0002)'  # Set it to night mode

        ed.dsmr.services.telegram.parse(
            user=self.user,
            telegram='\r\n'.join(telegram_list)
        )

        self.assertFalse(qs_electricity_produced.exists())

        telegram_list[8] = '1-0:2.8.2(000000.001*kWh)'

        ed.dsmr.services.telegram.parse(
            user=self.user,
            telegram='\r\n'.join(telegram_list)
        )

        self.assertTrue(qs_electricity_produced.exists())
