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

    def __repr__(self):
        return self.name


class ReadingReport(object):

    def __init__(self, **kwargs):
        self._values = kwargs

    def __getattr__(self, item):
        print('__getattr__', item)
        if item in self._values:
            return self._values[item]

    @property
    def pk(self):
        # Pretend that this "object" is saved. DRF only want to create a link to
        # a related object (power_meter) when the primary key is set.
        return True

    @property
    def power_meter(self):
        return self._values['power_meter']

    @property
    def value_increment(self):
        return self._values['value_increment__sum']

    @property
    def datetime(self):
        return datetime(
            year=self._values['year'],
            month=self._values.get('month', 1),
            day=self._values.get('day', 1),
            hour=self._values.get('hour', 0),
            minute=self._values.get('minute', 0),
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
            yield ReadingReport(**item)
            # power_meter = self.get_power_meter(item.pop('power_meter'))
            # yield ReadingReport(power_meter=power_meter, **item)


class ReadingReportsQuerySet(models.QuerySet):
    """
    .. Note:: The `annotate` method should be called after the `values` method.
    """

    def minute(self):
        return self._report('year', 'month', 'day', 'hour', 'minute')

    def hour(self):
        return self._report('year', 'month', 'day', 'hour')

    def day(self):
        return self._report('year', 'month', 'day')

    def month(self):
        return self._report('year', 'month')

    def year(self):
        return self._report('year')

    def _report(self, *args):
        qs = self\
            .order_by(*args or [] + ['power_meter'])\
            .values('power_meter', *args) \
            .annotate(Sum('value_increment'))
        qs._iterable_class = ReadingReportIterable
        return qs


class Reading(models.Model):

    reports = ReadingReportsQuerySet.as_manager()
    objects = models.Manager()

    power_meter = models.ForeignKey(PowerMeter)

    value_increment = models.DecimalField(max_digits=18, decimal_places=3)
    value_total = models.DecimalField(max_digits=18, decimal_places=3)

    datetime = models.DateTimeField()

    # Date time split out in units for easy reporting
    year = models.SmallIntegerField()
    month = models.SmallIntegerField()
    day = models.SmallIntegerField()
    hour = models.SmallIntegerField()
    minute = models.SmallIntegerField()
    second = models.SmallIntegerField()

    def save(self, update_fields=None, **kwargs):
        if update_fields is None or 'datetime' in update_fields:
            self.year = self.datetime.year
            self.month = self.datetime.month
            self.day = self.datetime.day
            self.hour = self.datetime.hour
            self.minute = self.datetime.minute
            self.second = self.datetime.second
        return super(Reading, self).save(update_fields=update_fields, **kwargs)

    def __repr__(self):
        return 'Reading at {} of {} (increment: {}'.format(
            self.datetime.isoformat(), self.value_total, self.value_increment)
