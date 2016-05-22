from django.test import TestCase
from django.utils import dateparse


from energy_dashboard.back_end.factories import ReadingFactory, \
    PowerMeterFactory
from energy_dashboard.back_end.models import Reading


class BackEndServiceReadingPostSaveCallbackTestCase(TestCase):

    def setUp(self):
        self.power_meter = PowerMeterFactory()

        self.reading_100 = ReadingFactory(
            datetime=dateparse.parse_datetime('2016-05-21 21:05:00'),
            value_total=100,
            value_increment=100,
            power_meter=self.power_meter
        )
        self.reading_150 = ReadingFactory(
            datetime=dateparse.parse_datetime('2016-05-21 21:10:00'),
            value_total=150,
            value_increment=50,
            power_meter=self.power_meter
        )
        self.reading_225 = ReadingFactory(
            datetime=dateparse.parse_datetime('2016-05-21 21:15:00'),
            value_total=225,
            value_increment=75,
            power_meter=self.power_meter
        )

    def test_insert_not_newest_reading(self):
        """
        Case: A new reading get inserted and a next reading is available
        Expected: the next reading increment value get updated
        """
        # Create new reading before reading "225"
        Reading.objects.create(
            datetime=dateparse.parse_datetime('2016-05-21 21:12:00'),
            value_total=175,
            value_increment=25,
            power_meter=self.power_meter
        )

        self.reading_100.refresh_from_db()
        self.assertEqual(self.reading_100.value_increment, 100)  # Same

        self.reading_150.refresh_from_db()
        self.assertEqual(self.reading_150.value_increment, 50)  # Same

        self.reading_225.refresh_from_db()
        self.assertEqual(self.reading_225.value_increment, 50)  # Updated

    def test_insert_newest_reading(self):
        """
        Case: A new reading get created which is the newest reading
        Expected: reading_increment get not updated
        """

        # Create newest reading
        Reading.objects.create(
            datetime=dateparse.parse_datetime('2016-05-22 21:12:00'),
            value_total=175,
            value_increment=-50,
            power_meter=self.power_meter
        )

        self.reading_100.refresh_from_db()
        self.assertEqual(self.reading_100.value_increment, 100)  # Same

        self.reading_150.refresh_from_db()
        self.assertEqual(self.reading_150.value_increment, 50)  # Same

        self.reading_225.refresh_from_db()
        self.assertEqual(self.reading_225.value_increment, 75)  # Same

    def test_insert_other_power_meter(self):
        """
        Case: A new reading get created which is the newest reading
        Expected: reading_increment get not updated
        """

        # Create new reading before reading "225" with different power meter
        Reading.objects.create(
            power_meter=PowerMeterFactory(),
            datetime=dateparse.parse_datetime('2016-05-21 21:12:00'),
            value_total=175,
            value_increment=175,
        )

        self.reading_100.refresh_from_db()
        self.assertEqual(self.reading_100.value_increment, 100)  # Same

        self.reading_150.refresh_from_db()
        self.assertEqual(self.reading_150.value_increment, 50)  # Same

        self.reading_225.refresh_from_db()
        self.assertEqual(self.reading_225.value_increment, 75)  # Same