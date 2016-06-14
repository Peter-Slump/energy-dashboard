from datetime import datetime

import random

from django.utils import dateparse
from django.test import TestCase
from faker import Factory

from energy_dashboard.back_end.factories import (
    PowerMeterFactory,
    ReadingFactory
)
from energy_dashboard.back_end.models import Reading, ReadingReport


class BackEndModelReadingReportTestCase(TestCase):

    def setUp(self):
        self.power_meter = PowerMeterFactory()

    def setup_reading(self, value_increment, year=None, month=None, day=None,
                      hour=None, minute=None, power_meter=None):
        fake = Factory.create()

        return ReadingFactory(
            power_meter=power_meter or self.power_meter,
            datetime=datetime(
                year=year if year is not None else fake.year(),
                month=month if month is not None else int(fake.month()),
                day=day if day is not None else int(fake.day_of_month()),
                hour=hour if hour is not None else random.randrange(0, 23),
                minute=minute if minute is not None else random.randrange(0, 59)
            ),
            value_increment=value_increment)

    def test_report_minutely(self):
        """
        Case: The sum of all increment values get requested
        Expected: Two items get returned for each minute one with the sum of
                  value_increment
        """
        range_minute_5 = [43, 78, 28]
        range_minute_6 = [15, 23, 45]

        for value in range_minute_5:
            self.setup_reading(value, year=2016, month=5, day=19, hour=21,
                               minute=5)

        for value in range_minute_6:
            self.setup_reading(value, year=2016, month=5, day=19, hour=21,
                               minute=6)

        reports = Reading.reports.minute()

        self.assertEqual(len(reports), 2)

        # 2016-05-19 21:00:00
        item = reports[0]
        self.assertIsInstance(item, ReadingReport)
        self.assertEqual(item.datetime,
                         dateparse.parse_datetime('2016-05-19 21:05:00'))
        self.assertEqual(item.power_meter, self.power_meter)
        self.assertEqual(item.value_increment__sum, sum(range_minute_5))

        # 2016-05-19 22:00:00
        item = reports[1]
        self.assertIsInstance(item, ReadingReport)
        self.assertEqual(item.datetime,
                         dateparse.parse_datetime('2016-05-19 21:06:00'))
        self.assertEqual(item.power_meter, self.power_meter)
        self.assertEqual(item.value_increment__sum, sum(range_minute_6))

    def test_report_hourly(self):
        """
        Case: The sum of all increment values get requested
        Expected: Two items get returned for each hour one with the sum of
                  value_increment
        """
        range_hour_21 = [43, 78, 28]
        range_hour_22 = [15, 23, 45]

        for value in range_hour_21:
            self.setup_reading(value, year=2016, month=5, day=19, hour=21)

        for value in range_hour_22:
            self.setup_reading(value, year=2016, month=5, day=19, hour=22)

        reports = Reading.reports.hour()

        self.assertEqual(len(reports), 2)

        # 2016-05-19 21:00:00
        item = reports[0]
        self.assertIsInstance(item, ReadingReport)
        self.assertEqual(item.datetime,
                         dateparse.parse_datetime('2016-05-19 21:00:00'))
        self.assertEqual(item.power_meter, self.power_meter)
        self.assertEqual(item.value_increment__sum, sum(range_hour_21))

        # 2016-05-19 22:00:00
        item = reports[1]
        self.assertIsInstance(item, ReadingReport)
        self.assertEqual(item.datetime,
                         dateparse.parse_datetime('2016-05-19 22:00:00'))
        self.assertEqual(item.power_meter, self.power_meter)
        self.assertEqual(item.value_increment__sum, sum(range_hour_22))

    def test_report_daily(self):
        """
        Case: The sum of all increment values get requested
        Expected: Two items get returned for each hour one with the sum of
                  value_increment
        """
        range_day_3 = [43, 78, 28]
        range_day_4 = [15, 23, 45]

        for value in range_day_3:
            self.setup_reading(value, year=2016, month=5, day=3)

        for value in range_day_4:
            self.setup_reading(value, year=2016, month=5, day=4)

        reports = Reading.reports.day()

        self.assertEqual(len(reports), 2)

        # 2016-05-03 00:00:00
        item = reports[0]
        self.assertIsInstance(item, ReadingReport)
        self.assertEqual(item.datetime,
                         dateparse.parse_datetime('2016-05-03 00:00:00'))
        self.assertEqual(item.power_meter, self.power_meter)
        self.assertEqual(item.value_increment__sum, sum(range_day_3))

        # 2016-05-04 00:00:00
        item = reports[1]
        self.assertIsInstance(item, ReadingReport)
        self.assertEqual(item.datetime,
                         dateparse.parse_datetime('2016-05-04 00:00:00'))
        self.assertEqual(item.power_meter, self.power_meter)
        self.assertEqual(item.value_increment__sum, sum(range_day_4))

    def test_report_monthly(self):
        """
        Case: The sum of all increment values get requested
        Expected: Two items get returned for each hour one with the sum of
                  value_increment
        """
        range_month_1 = [43, 78, 28]
        range_month_2 = [15, 23, 45]

        for value in range_month_1:
            self.setup_reading(value, year=2016, month=1)

        for value in range_month_2:
            self.setup_reading(value, year=2016, month=2)

        reports = Reading.reports.month()

        self.assertEqual(len(reports), 2)

        # 2016-01-01 00:00:00
        item = reports[0]
        self.assertIsInstance(item, ReadingReport)
        self.assertEqual(item.datetime,
                         dateparse.parse_datetime('2016-01-01 00:00:00'))
        self.assertEqual(item.power_meter, self.power_meter)
        self.assertEqual(item.value_increment__sum, sum(range_month_1))

        # 2016-02-01 00:00:00
        item = reports[1]
        self.assertIsInstance(item, ReadingReport)
        self.assertEqual(item.datetime,
                         dateparse.parse_datetime('2016-02-01 00:00:00'))
        self.assertEqual(item.power_meter, self.power_meter)
        self.assertEqual(item.value_increment__sum, sum(range_month_2))

    def test_report_yearly(self):
        """
        Case: The sum of all increment values get requested
        Expected: Two items get returned for each hour one with the sum of
                  value_increment
        """
        range_year_2015 = [43, 78, 28]
        range_year_2016 = [15, 23, 45]

        for value in range_year_2015:
            self.setup_reading(value, year=2015)

        for value in range_year_2016:
            self.setup_reading(value, year=2016)

        reports = Reading.reports.year()

        self.assertEqual(len(reports), 2)

        # 2015-01-01 00:00:00
        item = reports[0]
        self.assertIsInstance(item, ReadingReport)
        self.assertEqual(item.datetime,
                         dateparse.parse_datetime('2015-01-01 00:00:00'))
        self.assertEqual(item.power_meter, self.power_meter)
        self.assertEqual(item.value_increment__sum, sum(range_year_2015))

        # 2016-01-01 00:00:00
        item = reports[1]
        self.assertIsInstance(item, ReadingReport)
        self.assertEqual(item.datetime,
                         dateparse.parse_datetime('2016-01-01 00:00:00'))
        self.assertEqual(item.power_meter, self.power_meter)
        self.assertEqual(item.value_increment__sum, sum(range_year_2016))