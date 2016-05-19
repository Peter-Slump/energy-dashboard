from django.utils import dateparse
from django.test import TestCase

from energy_dashboard.back_end.factories import (
    PowerMeterFactory,
    ReadingFactory
)
from energy_dashboard.back_end.models import Reading


class BackEndModelReadingTestCase(TestCase):

    def setUp(self):
        power_meter = PowerMeterFactory()

        # Create 3 readings within one hour
        ReadingFactory(power_meter=power_meter,
                       datetime=dateparse.parse_datetime('2016-05-19 21:05:00'),
                       value_increment=15)
        ReadingFactory(power_meter=power_meter,
                       datetime=dateparse.parse_datetime('2016-05-19 21:10:00'),
                       value_increment=23)
        ReadingFactory(power_meter=power_meter,
                       datetime=dateparse.parse_datetime('2016-05-19 21:15:00'),
                       value_increment=45)

        # Create 3 readings within second hour
        ReadingFactory(power_meter=power_meter,
                       datetime=dateparse.parse_datetime('2016-05-19 22:05:00'),
                       value_increment=43)
        ReadingFactory(power_meter=power_meter,
                       datetime=dateparse.parse_datetime('2016-05-19 22:10:00'),
                       value_increment=78)
        ReadingFactory(power_meter=power_meter,
                       datetime=dateparse.parse_datetime('2016-05-19 22:15:00'),
                       value_increment=28)

    def test_get_sum_grouped_by_hour(self):
        """
        Case: The sum of all increment values get requested
        Expected: Two items get returned for each hour one with the sum of
                  value_increment
        """
        sum_per_hour = Reading.reports.hourly()

        for item in sum_per_hour:
            print(item)

        # self.assertEqual(sum_per_hour, 2)
