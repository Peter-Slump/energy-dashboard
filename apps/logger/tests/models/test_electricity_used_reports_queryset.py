import datetime

import pytz

from django.test import TestCase

from apps.logger.models import ElectricityUsedReading, AGGREGATE_YEAR, \
    AGGREGATE_MONTH, AGGREGATE_DAY, AGGREGATE_HOUR, AGGREGATE_MINUTE


class ElectricityUsedReportsQuerySetTestCase(TestCase):

    def setUp(self):
        self.tz = pytz.timezone('UTC')

        # Tariff 1 on 2015-12-31
        ElectricityUsedReading.objects.create(
            tariff=1,
            total=50,
            actual=100,
            datetime=self.tz.localize(datetime.datetime(2015, 12, 31, 23, 0))
        )
        ElectricityUsedReading.objects.create(
            tariff=1,
            total=100,
            actual=100,
            datetime=self.tz.localize(datetime.datetime(2015, 12, 31, 23, 59, 59))
        )

        # Tariff 1 on 2016-01-01
        ElectricityUsedReading.objects.create(
            tariff=1,
            total=600,
            actual=100,
            datetime=self.tz.localize(datetime.datetime(2016, 1, 1, 21, 0))
        )
        ElectricityUsedReading.objects.create(
            tariff=1,
            total=610,
            actual=100,
            datetime=self.tz.localize(datetime.datetime(2016, 1, 1, 21, 0, 10))
        )
        ElectricityUsedReading.objects.create(
            tariff=1,
            total=650,
            actual=160,
            datetime=self.tz.localize(datetime.datetime(2016, 1, 1, 21, 30))
        )
        # Tariff 2 on 2016-01-01
        ElectricityUsedReading.objects.create(
            tariff=2,
            total=800,
            actual=20,
            datetime=self.tz.localize(datetime.datetime(2016, 1, 1, 21, 59))
        )
        ElectricityUsedReading.objects.create(
            tariff=2,
            total=810,
            actual=40,
            datetime=self.tz.localize(datetime.datetime(2016, 1, 1, 22, 30))
        )

    def test_tariff_split(self):
        """
        Case: split aggregated results by tariff grouped by hour
        Expect: each hour to appear for each tariff
        """

        report = ElectricityUsedReading.reports.used(
            start=self.tz.localize(datetime.datetime(2016, 1, 1)),
            end=self.tz.localize(datetime.datetime(2016, 1, 2)),
            aggregate_by=AGGREGATE_HOUR,
            split_tariff=True
        )

        self.assertEqual(len(report), 2)

        self.assertEqual(
            report[0],
            ('2016-01-01T21:00:00', 50.0, 1)
        )

        self.assertEqual(
            report[1],
            ('2016-01-01T21:00:00', 10.0, 2)
        )

    def test_year_spanning_with_month_aggregation(self):
        """
        Case: aggregate all test records by grouping by calendar month
        Expect: both december and january to be returned once. Each month
                should contain the totals of all tariffs combined
        """

        report = ElectricityUsedReading.reports.used(
            start=self.tz.localize(datetime.datetime(2015, 11, 30)),
            end=self.tz.localize(datetime.datetime(2016, 2, 1)),
            aggregate_by=AGGREGATE_MONTH,
            split_tariff=False
        )

        self.assertEqual(
            report,
            [
                ('2015-12-01T00:00:00', 550.0),
                ('2016-01-01T00:00:00', 60.0)
            ]
        )

    def test_aggregate_year(self):
        """
        Case: aggregate by year
        Expect: yearly aggregated results
        """

        report = ElectricityUsedReading.reports.used(
            start=self.tz.localize(datetime.datetime(2015, 11, 30)),
            end=self.tz.localize(datetime.datetime(2016, 2, 1)),
            aggregate_by=AGGREGATE_YEAR,
            split_tariff=False
        )

        self.assertEqual(
            report,
            [
                ('2015-01-01T00:00:00', 550.0),
                ('2016-01-01T00:00:00', 60.0)
            ]
        )

    def test_aggregate_month(self):
        """
        Case: aggregate by month
        Expect: monthly aggregated results
        """

        report = ElectricityUsedReading.reports.used(
            start=self.tz.localize(datetime.datetime(2015, 11, 30)),
            end=self.tz.localize(datetime.datetime(2016, 2, 1)),
            aggregate_by=AGGREGATE_MONTH,
            split_tariff=False
        )

        self.assertEqual(
            report,
            [
                ('2015-12-01T00:00:00', 550.0),
                ('2016-01-01T00:00:00', 60.0)
            ]
        )

    def test_aggregate_day(self):
        """
        Case: aggregate by day
        Expect: daily aggregated results
        """

        report = ElectricityUsedReading.reports.used(
            start=self.tz.localize(datetime.datetime(2015, 11, 30)),
            end=self.tz.localize(datetime.datetime(2016, 2, 1)),
            aggregate_by=AGGREGATE_DAY,
            split_tariff=False
        )

        self.assertEqual(
            report,
            [
                ('2015-12-31T00:00:00', 550.0),
                ('2016-01-01T00:00:00', 60.0)
            ]
        )

    def test_aggregate_hour(self):
        """
        Case: aggregate by hour
        Expect: hourly aggregated results
        """

        report = ElectricityUsedReading.reports.used(
            start=self.tz.localize(datetime.datetime(2015, 11, 30)),
            end=self.tz.localize(datetime.datetime(2016, 2, 1)),
            aggregate_by=AGGREGATE_HOUR,
            split_tariff=False
        )

        self.assertEqual(
            report,
            [
                ('2015-12-31T23:00:00', 550.0),
                ('2016-01-01T21:00:00', 60.0)
            ]
        )

    def test_aggregate_minute(self):
        """
        Case: aggregate by minute
        Expect: minutely aggregated results
        """

        report = ElectricityUsedReading.reports.used(
            start=self.tz.localize(datetime.datetime(2015, 11, 30)),
            end=self.tz.localize(datetime.datetime(2016, 2, 1)),
            aggregate_by=AGGREGATE_MINUTE,
            split_tariff=False
        )

        self.assertEqual(
            report,
            [
                ('2015-12-31T23:00:00', 50.0),
                ('2015-12-31T23:59:00', 500.0),
                ('2016-01-01T21:00:00', 50.0),
                ('2016-01-01T21:59:00', 10.0),
            ]
        )

    def test_date_boundary(self):
        """
        Case: start and end dates at the edge of reading dates get used
        Expect: expect edge cases to be covered
        """

        report = ElectricityUsedReading.reports.used(
            start=self.tz.localize(datetime.datetime(2016, 1, 1, 21, 0)),
            end=self.tz.localize(datetime.datetime(2016, 1, 1, 21, 30)),
            aggregate_by=AGGREGATE_MINUTE,
            split_tariff=False
        )

        self.assertEqual(
            report,
            [
                ('2016-01-01T21:00:00', 50.0)
            ]
        )
