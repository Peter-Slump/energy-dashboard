from django.test import TestCase
from django.utils import dateparse

from energy_dashboard.back_end.factories import ReadingFactory
from energy_dashboard.back_end.models import Reading


class BackEndReadingQuerySetTestCase(TestCase):

    def setUp(self):
        ReadingFactory(datetime=dateparse.parse_datetime('2015-05-21 21:05:00'))
        ReadingFactory(datetime=dateparse.parse_datetime('2016-04-21 21:10:00'))
        ReadingFactory(datetime=dateparse.parse_datetime('2016-05-20 21:15:00'))
        ReadingFactory(datetime=dateparse.parse_datetime('2016-05-21 20:20:03'))
        ReadingFactory(datetime=dateparse.parse_datetime('2016-05-21 21:29:00'))
        ReadingFactory(datetime=dateparse.parse_datetime('2016-05-21 21:30:59'))
        ReadingFactory(datetime=dateparse.parse_datetime('2016-05-21 21:35:00'))

    def test_get_equal(self):
        """
        Case: A reading get queried where the datetime should be equal to given
              value
        Expected: One value get returned
        """
        reading = Reading.objects.get(datetime='2016-05-21 20:20:03')
        self.assertEqual(reading.year, 2016)
        self.assertEqual(reading.month, 5)
        self.assertEqual(reading.day, 21)
        self.assertEqual(reading.hour, 20)
        self.assertEqual(reading.minute, 20)
        self.assertEqual(reading.second, 3)

    def test_filter_lt(self):
        """
        Case: readings get filtered on a datetime with a "less than" filter
        Expected: All resulted readings are LT of given datetime
        """
        parsed_datetime = dateparse.parse_datetime('2016-05-21 21:29:00Z')
        readings = Reading.objects.filter(datetime__lt=parsed_datetime)

        self.assertEqual(readings.count(), 4)
        for reading in readings:
            self.assertLess(reading.datetime, parsed_datetime)

    def test_filter_lte(self):
        """
        Case: readings get filtered on a datetime with a "less than or equal"
              filter
        Expected: All resulted readings are LTE of given datetime
        """
        parsed_datetime = dateparse.parse_datetime('2016-05-21 21:29:00Z')
        readings = Reading.objects.filter(datetime__lte=parsed_datetime)

        self.assertEqual(readings.count(), 5)
        for reading in readings:
            self.assertLessEqual(reading.datetime, parsed_datetime)

    def test_filter_gt(self):
        """
        Case: readings get filtered on a datetime with a "greater than"
              filter
        Expected: All resulted readings are GT of given datetime
        """
        parsed_datetime = dateparse.parse_datetime('2016-05-20 21:15:00Z')
        readings = Reading.objects.filter(datetime__gt=parsed_datetime)

        self.assertEqual(readings.count(), 4)
        for reading in readings:
            self.assertGreater(reading.datetime, parsed_datetime)

    def test_filter_gte(self):
        """
        Case: readings get filtered on a datetime with a "greater than or equal"
              filter
        Expected: All resulted readings are GTE of given datetime
        """
        parsed_datetime = dateparse.parse_datetime('2016-05-20 21:15:00Z')
        readings = Reading.objects.filter(datetime__gte=parsed_datetime)

        self.assertEqual(readings.count(), 5)
        for reading in readings:
            self.assertGreaterEqual(reading.datetime, parsed_datetime)

    def test_range(self):
        """
        Case: readings get filtered on range
        Expected: only readings which fits in the range get returned
        """
        parsed_begin_datetime = dateparse.parse_datetime('2016-05-20 21:15:00Z')
        parsed_end_datetime = dateparse.parse_datetime('2016-05-21 21:29:00Z')
        readings = Reading.objects.filter(datetime__gte=parsed_begin_datetime,
                                          datetime__lte=parsed_end_datetime)

        self.assertEqual(readings.count(), 3)
        for reading in readings:
            self.assertGreaterEqual(reading.datetime, parsed_begin_datetime)
            self.assertLessEqual(reading.datetime, parsed_end_datetime)

    def test_order_asc(self):
        """
        Case: Readings get ordered on datetime
        Expected: Each next reading should be newer than the previous
        """
        readings = Reading.objects.order_by('datetime')
        total = readings.count()
        self.assertEqual(total, 7)
        for index, reading in enumerate(readings):
            if index + 1 < total:
                self.assertLess(reading.datetime, readings[index+1].datetime)

    def test_order_desc(self):
        """
        Case: Readings get ordered on datetime (DESC)
        Expected: Each next reading should be newer than the previous
        """
        readings = Reading.objects.order_by('-datetime')
        total = readings.count()
        self.assertEqual(total, 7)
        for index, reading in enumerate(readings):
            if index + 1 < total:
                self.assertGreater(reading.datetime, readings[index+1].datetime)
