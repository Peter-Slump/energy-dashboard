from decimal import Decimal
from django.test.testcases import TestCase
from django.utils.dateparse import parse_datetime

from ed.back_end.factories import (
    PowerMeterFactory,
    ReadingFactory
)
from ed.back_end.models import Reading

import ed.back_end.services


class BackEndServiceAddReadingCallbackTestCase(TestCase):

    def setUp(self):
        self.power_meter = PowerMeterFactory()

    def test_first_reading_get_created(self):
        """
        Case: A reading get added the previous reading does not exists
        Expected: The total value get saved and the increment value is set to 0
        """
        self.assertFalse(
            Reading.objects.filter(power_meter=self.power_meter).exists())

        ed.back_end.services.add_reading(
            power_meter=self.power_meter,
            value_total=123.34,
            datetime=parse_datetime('2016-08-14T22:52:00Z')
        )

        reading = Reading.objects.get(power_meter=self.power_meter)
        self.assertEqual(reading.value_total, Decimal('123.340'))
        self.assertEqual(reading.value_increment, 0)
        self.assertEqual(reading.datetime,
                         parse_datetime('2016-08-14T22:52:00Z'))

    def test_reading_get_added(self):
        """
        Case: A reading get added a previous readings exists
        Expected: The total value get saved and the increment value get
                  calculated
        """
        ReadingFactory(
            power_meter=self.power_meter,
            value_total=123.34,
            datetime=parse_datetime('2016-08-14T22:50:00Z')
        )  # Add extra reading to test correct order of used queryset
        ReadingFactory(
            power_meter=self.power_meter,
            value_total=254.34,
            datetime=parse_datetime('2016-08-14T22:50:30Z')
        )

        ed.back_end.services.add_reading(
            power_meter=self.power_meter,
            value_total=354.00,
            datetime=parse_datetime('2016-08-14T22:52:00Z')
        )

        reading = Reading.objects.order_by('-datetime')\
            .filter(power_meter=self.power_meter)[0]

        self.assertEqual(reading.value_total, Decimal('354.000'))
        self.assertEqual(reading.value_increment, Decimal('99.660'))
        self.assertEqual(reading.datetime,
                         parse_datetime('2016-08-14T22:52:00Z'))

    def test_value_get_updated_when_added_for_second_time(self):
        """
        Case: A reading get added a previous readings exists
        Expected: The total value get saved and the increment value get
                  calculated
        """
        ReadingFactory(
            power_meter=self.power_meter,
            value_total=123.34,
            datetime=parse_datetime('2016-08-14T22:50:00Z')
        )  # Add extra reading to test correct order of used queryset
        ReadingFactory(
            power_meter=self.power_meter,
            value_total=254.34,
            datetime=parse_datetime('2016-08-14T22:50:30Z')
        )

        ed.back_end.services.add_reading(
            power_meter=self.power_meter,
            value_total=354.00,
            datetime=parse_datetime('2016-08-14T22:52:00Z')
        )

        reading = Reading.objects.order_by('-datetime') \
            .filter(power_meter=self.power_meter)[0]

        self.assertEqual(reading.value_total, Decimal('354.000'))
        self.assertEqual(reading.value_increment, Decimal('99.660'))
        self.assertEqual(reading.datetime,
                         parse_datetime('2016-08-14T22:52:00Z'))

        ed.back_end.services.add_reading(
            power_meter=self.power_meter,
            value_total=454.00,
            datetime=parse_datetime('2016-08-14T22:52:00Z')
        )

        reading = Reading.objects.order_by('-datetime') \
            .filter(power_meter=self.power_meter)[0]

        self.assertEqual(reading.value_total, Decimal('454.000'))
        self.assertEqual(reading.value_increment, Decimal('199.660'))
        self.assertEqual(reading.datetime,
                         parse_datetime('2016-08-14T22:52:00Z'))

        self.assertEqual(
            Reading.objects.filter(
                power_meter=self.power_meter,
                datetime=parse_datetime('2016-08-14T22:52:00Z')
            ).count(),
            1
        )

    def test_current_value(self):
        """
        Case: A current value get added
        Expected: The current value and the corresponding datetime are saved on
                  the power meter model.
        """
        ed.back_end.services.add_reading(
            power_meter=self.power_meter,
            value_total=123.34,
            datetime=parse_datetime('2016-08-14T22:52:00Z'),
            current_value=Decimal('1.256')
        )

        self.power_meter.refresh_from_db()
        self.assertEqual(self.power_meter.current_value, Decimal('1.256'))
        self.assertEqual(self.power_meter.current_value_datetime,
                         parse_datetime('2016-08-14T22:52:00Z'))