import datetime

import pytz

from django.test import TestCase

from apps.logger.models import GasReading, AGGREGATE_YEAR, \
    AGGREGATE_MONTH, AGGREGATE_DAY, AGGREGATE_HOUR, AGGREGATE_MINUTE


class GasReportsQuerySetTestCase(TestCase):

    def setUp(self):
        self.tz = pytz.timezone('UTC')

        # 2015-12-31
        GasReading.objects.create(
            total=50,
            datetime=self.tz.localize(datetime.datetime(2015, 12, 31, 23, 0))
        )
        GasReading.objects.create(
            total=100,
            datetime=self.tz.localize(datetime.datetime(2015, 12, 31, 23, 59, 59))
        )

        # 2016-01-01
        GasReading.objects.create(
            total=600,
            datetime=self.tz.localize(datetime.datetime(2016, 1, 1, 21, 0))
        )
        GasReading.objects.create(
            total=610,
            datetime=self.tz.localize(datetime.datetime(2016, 1, 1, 21, 0, 10))
        )
        GasReading.objects.create(
            total=650,
            datetime=self.tz.localize(datetime.datetime(2016, 1, 1, 22, 00))
        )
        GasReading.objects.create(
            total=665,
            datetime=self.tz.localize(datetime.datetime(2016, 1, 1, 23, 00))
        )

    def test_aggregate_year(self):
        """
        Case: aggregate by year
        Expect: yearly aggregated results
        """

        report = GasReading.reports.used(
            start=self.tz.localize(datetime.datetime(2015, 11, 30)),
            end=self.tz.localize(datetime.datetime(2016, 2, 1)),
            aggregate_by=AGGREGATE_YEAR
        )

        self.assertEqual(
            report,
            [
                ('2015-01-01T00:00:00', 550.0),
                ('2016-01-01T00:00:00', 65.0)
            ]
        )

    def test_aggregate_month(self):
        """
        Case: aggregate by month
        Expect: monthly aggregated results
        """

        report = GasReading.reports.used(
            start=self.tz.localize(datetime.datetime(2015, 11, 30)),
            end=self.tz.localize(datetime.datetime(2016, 2, 1)),
            aggregate_by=AGGREGATE_MONTH
        )

        self.assertEqual(
            report,
            [
                ('2015-12-01T00:00:00', 550.0),
                ('2016-01-01T00:00:00', 65.0)
            ]
        )

    def test_aggregate_day(self):
        """
        Case: aggregate by day
        Expect: daily aggregated results
        """

        report = GasReading.reports.used(
            start=self.tz.localize(datetime.datetime(2015, 11, 30)),
            end=self.tz.localize(datetime.datetime(2016, 2, 1)),
            aggregate_by=AGGREGATE_DAY
        )

        self.assertEqual(
            report,
            [
                ('2015-12-31T00:00:00', 550.0),
                ('2016-01-01T00:00:00', 65.0)
            ]
        )

    def test_aggregate_hour(self):
        """
        Case: aggregate by hour
        Expect: hourly aggregated results
        """

        report = GasReading.reports.used(
            start=self.tz.localize(datetime.datetime(2015, 11, 30)),
            end=self.tz.localize(datetime.datetime(2016, 2, 1)),
            aggregate_by=AGGREGATE_HOUR
        )

        self.assertEqual(
            report,
            [
                ('2015-12-31T23:00:00', 550.0),
                ('2016-01-01T21:00:00', 50.0),
                ('2016-01-01T22:00:00', 15.0)
            ]
        )

    def test_aggregate_minute(self):
        """
        Case: aggregate by minute
        Expect: minutely aggregated results
        """

        report = GasReading.reports.used(
            start=self.tz.localize(datetime.datetime(2015, 11, 30)),
            end=self.tz.localize(datetime.datetime(2016, 2, 1)),
            aggregate_by=AGGREGATE_MINUTE
        )

        self.assertEqual(
            report,
            [
                ('2015-12-31T23:00:00', 50.0),
                ('2015-12-31T23:59:00', 500.0),
                ('2016-01-01T21:00:00', 50.0),
                ('2016-01-01T22:00:00', 15.0)
            ]
        )

    def test_date_boundary(self):
        """
        Case: start and end dates at the edge of reading dates get used
        Expect: expect edge cases to be covered
        """

        # Expect only 21:00:00 to be covered not including the reading from
        # 21:30:00.
        report = GasReading.reports.used(
            start=self.tz.localize(datetime.datetime(2016, 1, 1, 22, 0)),
            end=self.tz.localize(datetime.datetime(2016, 1, 1, 23, 0)),
            aggregate_by=AGGREGATE_MINUTE
        )

        self.assertEqual(
            report,
            [
                ('2016-01-01T22:00:00', 15.0)
            ]
        )
