from django.utils import dateparse
from django.test import TestCase

from energy_dashboard.back_end.factories import (
    PowerMeterFactory,
    ReadingFactory
)
from energy_dashboard.back_end.models import Reading, ReadingReport


class BackEndModelReadingTestCase(TestCase):

    def setUp(self):
        self.power_meter = PowerMeterFactory()

        # Create 3 readings within a hour
        ReadingFactory(power_meter=self.power_meter,
                       datetime=dateparse.parse_datetime('2016-05-19 22:05:00'),
                       value_increment=43)
        ReadingFactory(power_meter=self.power_meter,
                       datetime=dateparse.parse_datetime('2016-05-19 22:10:00'),
                       value_increment=78)
        ReadingFactory(power_meter=self.power_meter,
                       datetime=dateparse.parse_datetime('2016-05-19 22:15:00'),
                       value_increment=28)

        # Create 3 readings within previous hour
        ReadingFactory(power_meter=self.power_meter,
                       datetime=dateparse.parse_datetime('2016-05-19 21:05:00'),
                       value_increment=15)
        ReadingFactory(power_meter=self.power_meter,
                       datetime=dateparse.parse_datetime('2016-05-19 21:10:00'),
                       value_increment=23)
        ReadingFactory(power_meter=self.power_meter,
                       datetime=dateparse.parse_datetime('2016-05-19 21:15:00'),
                       value_increment=45)

    def test_report_summed_per_hour(self):
        """
        Case: The sum of all increment values get requested
        Expected: Two items get returned for each hour one with the sum of
                  value_increment
        """
        sum_per_hour = Reading.reports.hourly()

        self.assertEqual(len(sum_per_hour), 2)

        # 2016-05-19 21:00:00
        item = sum_per_hour[0]
        self.assertIsInstance(item, ReadingReport)
        self.assertEqual(item.datetime,
                         dateparse.parse_datetime('2016-05-19 21:00:00'))
        self.assertEqual(item.power_meter, self.power_meter)
        self.assertEqual(item.value_increment__sum, 83)

        # 2016-05-19 22:00:00
        item = sum_per_hour[1]
        self.assertIsInstance(item, ReadingReport)
        self.assertEqual(item.datetime,
                         dateparse.parse_datetime('2016-05-19 22:00:00'))
        self.assertEqual(item.power_meter, self.power_meter)
        self.assertEqual(item.value_increment__sum, 149)
