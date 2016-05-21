from datetime import datetime

from django.db import models
from django.db.models.aggregates import Sum
from django.db.models.query import ValuesIterable
from django.utils.translation import ugettext as _


class PowerMeter(models.Model):

    UNITS = (
        ('kwh', _('kWh')),
        ('m3', _('m³'))
    )

    name = models.CharField(max_length=255)
    unit = models.CharField(choices=UNITS, max_length=10)


class ReadingReport(object):

    def __init__(self, power_meter, **kwargs):
        self._power_meter = power_meter
        self._values = kwargs

    def __getattr__(self, item):
        if item in self._values:
            return self._values[item]
        return super(ReadingReport, self).__getattr__(item)

    @property
    def power_meter(self):
        return self._power_meter

    @property
    def datetime(self):
        return datetime(
            year=self._values['_datetime__year'],
            month=self._values.get('_datetime__month', 1),
            day=self._values.get('_datetime__day', 1),
            hour=self._values.get('_datetime__hour', 0),
            minute=self._values.get('_datetime__minute', 0),
            second=0
        )


class ReadingReportIterable(ValuesIterable):
    """
    Gives a ReadingReportsQuerySet.Report as result instead of a dict.
    """

    def get_power_meter(self, id):
        """
        Fetch and cache a power meter.
        :param int id:
        :rtype: PowerMeter
        """
        if not hasattr(self, '_power_meters'):
            self._power_meters = {}

        if id not in self._power_meters:
            self._power_meters[id] = PowerMeter.objects.get(pk=id)
        return self._power_meters[id]

    def __iter__(self):
        for item in super(ReadingReportIterable, self).__iter__():
            power_meter = self.get_power_meter(item.pop('power_meter'))
            yield ReadingReport(power_meter=power_meter, **item)


class ReadingReportsQuerySet(models.QuerySet):
    """
    .. Note:: The `annotate` method should be called after the `values` method.
    """

    def minutely(self):
        return self._report('_datetime__year', '_datetime__month',
                            '_datetime__day', '_datetime__hour',
                            '_datetime__minute')

    def hourly(self):
        return self._report('_datetime__year', '_datetime__month',
                            '_datetime__day', '_datetime__hour')

    def daily(self):
        return self._report('_datetime__year', '_datetime__month',
                            '_datetime__day')

    def monthly(self):
        return self._report('_datetime__year', '_datetime__month')

    def yearly(self):
        return self._report('_datetime__year')

    def _report(self, *args):
        qs = self\
            .order_by(*args or [] + ['power_meter'])\
            .values('power_meter', *args) \
            .annotate(Sum('value_increment'))
        qs._iterable_class = ReadingReportIterable
        return qs


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
        unique_together = (('year', 'month', 'day', 'hour', 'minute', 'second'),)