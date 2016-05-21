from django.utils import dateparse
from django.test import TestCase
from operator import itemgetter

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

    def test_report_summed_per_hour(self):
        """
        Case: The sum of all increment values get requested
        Expected: Two items get returned for each hour one with the sum of
                  value_increment
        """
        sum_per_hour = Reading.reports.hourly()

        self.assertEqual(len(sum_per_hour), 2)

        sum_per_hour_sorted = sorted(sum_per_hour,
                                     key=itemgetter('value_increment__sum'))

        self.assertEqual(sum_per_hour_sorted[0]['value_increment__sum'], 83)
        self.assertEqual(sum_per_hour_sorted[1]['value_increment__sum'], 149)
