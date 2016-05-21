from datetime import datetime

from django.db import models
from django.db.models.aggregates import Sum
from django.utils.translation import ugettext as _


class PowerMeter(models.Model):

    UNITS = (
        ('kwh', _('kWh')),
        ('m3', _('m³'))
    )

    name = models.CharField(max_length=255)
    unit = models.CharField(choices=UNITS, max_length=10)


class ReadingReportsQuerySet(models.QuerySet):

    def minutely(self):
        return self.values('power_meter', '_datetime__year', '_datetime__month',
                           '_datetime__day', '_datetime__hour',
                           '_datetime__minute') \
            .annotate(Sum('value_increment'))

    def hourly(self):
        return self.values('power_meter', '_datetime__year', '_datetime__month',
                           '_datetime__day', '_datetime__hour')\
            .annotate(Sum('value_increment'))

    def daily(self):
        return self.values('power_meter', '_datetime__year', '_datetime__month',
                           '_datetime__day') \
            .annotate(Sum('value_increment'))

    def monthly(self):
        return self.values('power_meter', '_datetime__year',
                           '_datetime__month')\
            .annotate(Sum('value_increment'))

    def yearly(self):
        return self.values('power_meter', '_datetime__year') \
            .annotate(Sum('value_increment'))


class Reading(models.Model):

    reports = ReadingReportsQuerySet.as_manager()

    power_meter = models.ForeignKey('back_end.PowerMeter')
    _datetime = models.ForeignKey('back_end.ReadingDateTime')
    value_increment = models.DecimalField()
    value_total = models.DecimalField()

    def set_datetime(self, datetime_):
        """
        :param datetime.datetime datetime_: datetime to set for this reading
        """
        reading_datetime, created = ReadingDateTime.objects.get_or_create(
            year=datetime_.year,
            month=datetime_.month,
            day=datetime_.day,
            hour=datetime_.hour,
            minute=datetime_.minute,
            second=datetime_.second
        )
        self._datetime = reading_datetime

    def get_datetime(self):
        """
        :rtype: datetime.datetime
        """
        return datetime(
            year=self._datetime.year,
            month=self._datetime.month,
            day=self._datetime.day,
            hour=self._datetime.hour,
            minute=self._datetime.minute,
            second=self._datetime.second
        )

    datetime = property(get_datetime, set_datetime)


class ReadingDateTime(models.Model):

    year = models.SmallIntegerField()
    month = models.SmallIntegerField()
    day = models.SmallIntegerField()
    hour = models.SmallIntegerField()
    minute = models.SmallIntegerField()
    second = models.SmallIntegerField()

    class Meta:
        unique_together = (
            ('year', 'month', 'day', 'hour', 'minute', 'second')
        )