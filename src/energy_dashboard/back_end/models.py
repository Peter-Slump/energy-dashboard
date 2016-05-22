from datetime import datetime

from django.db import models
from django.db.models.aggregates import Sum
from django.db.models.query import ValuesIterable
from django.db.models.query_utils import Q
from django.utils.translation import ugettext as _
from django.utils.dateparse import parse_datetime


class PowerMeter(models.Model):

    UNITS = (
        ('kwh', _('kWh')),
        ('m3', _('m³'))
    )

    name = models.CharField(max_length=255)
    unit = models.CharField(choices=UNITS, max_length=10)


class ReadingQuerySet(models.QuerySet):

    def filter(self, *args, **kwargs):
        args, kwargs = self._prepare_query_params(*args, **kwargs)
        return super(ReadingQuerySet, self).filter(*args, **kwargs)

    def get(self, *args, **kwargs):
        args, kwargs = self._prepare_query_params(*args, **kwargs)
        return super(ReadingQuerySet, self).get(*args, **kwargs)

    def exclude(self, *args, **kwargs):
        args, kwargs = self._prepare_query_params(*args, **kwargs)
        return super(ReadingQuerySet, self).exclude(*args, **kwargs)

    def _prepare_query_params(self, *args, **kwargs):
        """
        Prepare query params by translating a filtering on datetime* to a Q
        object which does the filter on the ReadingDateTime model.

        :param list args: args this will be appended with eventual Q objects
        :param dict kwargs: all 'datetime*' keys will be translated.
        :return: tuple: (args, kwargs)
        """
        args = list(args) if args else []
        prepared_kwargs = {}

        for key, value in kwargs.items():
            if key.startswith('datetime'):
                args.append(self._build_datetime_q_object(key, value))
            else:
                prepared_kwargs[key] = value

        return args, prepared_kwargs

    def _build_datetime_q_object(self, key, datetime_):
        """

        :param str key: this should always start with 'datetime' and can be
                        appended with an filter (lt, lte, gt, gte).
        :param datetime datetime_: a datetime object or a string which can be parsed
                               to a datetime object.
        :return: a Q object to filter on datetime
        :rtype: Q
        """
        filter_ = ''
        if '__' in key:
            key, filter_ = key.split('__')

            supported_filters = ('lt', 'lte', 'gt', 'gte')
            if filter_ not in supported_filters:
                raise NotImplementedError(
                    'Only filters %s are supported for datetime',
                    ', '.join(supported_filters)
                )

        if not isinstance(datetime_, datetime):
            datetime_ = parse_datetime(value=datetime_)

        q_object = None

        # First setup lower-than and greater-than Q-objects. By using OR
        # statements the datetime will be checked form most significant (year)
        # to least significant (second). A match is found by the first value on
        # which the operator returns True.
        # Example: 2016-05-20 23:35:59 < 2016-05-21 22:36:05
        #   CHECK 2016 < 2016 = False > proceed to lesser significant
        #   CHECK 5 < 5 = False > proceed to lesser significant
        #   CHECK 20 < 21 = True >> return True.
        #   SKIPPED 23 < 22
        #   SKIPPED 35 < 36
        #   SKIPPED 59 < 05
        if filter_ in ('lt', 'lte'):
            q_object = Q(
                Q(
                    _datetime__year__lt=datetime_.year
                ) |
                Q(
                    _datetime__year=datetime_.year,
                    _datetime__month__lt=datetime_.month
                ) |
                Q(
                    _datetime__year=datetime_.year,
                    _datetime__month=datetime_.month,
                    _datetime__day__lt=datetime_.day
                ) |
                Q(
                    _datetime__year=datetime_.year,
                    _datetime__month=datetime_.month,
                    _datetime__day=datetime_.day,
                    _datetime__hour__lt=datetime_.hour
                ) |
                Q(
                    _datetime__year=datetime_.year,
                    _datetime__month=datetime_.month,
                    _datetime__day=datetime_.day,
                    _datetime__hour=datetime_.hour,
                    _datetime__minute__lt=datetime_.minute
                ) |
                Q(
                    _datetime__year=datetime_.year,
                    _datetime__month=datetime_.month,
                    _datetime__day=datetime_.day,
                    _datetime__hour=datetime_.hour,
                    _datetime__minute=datetime_.minute,
                    _datetime__second__lt=datetime_.second
                )
            )
        elif filter_ in ('gt', 'gte'):
            q_object = Q(
                Q(
                    _datetime__year__gt=datetime_.year
                ) |
                Q(
                    _datetime__year=datetime_.year,
                    _datetime__month__gt=datetime_.month
                ) |
                Q(
                    _datetime__year=datetime_.year,
                    _datetime__month=datetime_.month,
                    _datetime__day__gt=datetime_.day
                ) |
                Q(
                    _datetime__year=datetime_.year,
                    _datetime__month=datetime_.month,
                    _datetime__day=datetime_.day,
                    _datetime__hour__gt=datetime_.hour
                ) |
                Q(
                    _datetime__year=datetime_.year,
                    _datetime__month=datetime_.month,
                    _datetime__day=datetime_.day,
                    _datetime__hour=datetime_.hour,
                    _datetime__minute__gt=datetime_.minute
                ) |
                Q(
                    _datetime__year=datetime_.year,
                    _datetime__month=datetime_.month,
                    _datetime__day=datetime_.day,
                    _datetime__hour=datetime_.hour,
                    _datetime__minute=datetime_.minute,
                    _datetime__second__gt=datetime_.second
                )
            )

        # If we only have to check on lower than or greater than return the
        # Q-object.
        if filter_ in ('gt', 'lt'):
            return q_object

        # Equal check is easy, all values should be equal.
        q_object_eq = Q(
            _datetime__year=datetime_.year,
            _datetime__month=datetime_.month,
            _datetime__day=datetime_.day,
            _datetime__hour=datetime_.hour,
            _datetime__minute=datetime_.minute,
            _datetime__second=datetime_.second,
        )

        if filter_ in ('gte', 'lte'):
            # Returned combined Q-object. To validate LT/GT OR EQ.
            return Q(q_object | q_object_eq)
        else:
            return q_object_eq

    def order_by(self, *field_names):
        """
        Replace '[-]datetime' with a set of fields in the ReadingDateTime table.
        :param tuple field_names: Field names to order by
        """
        processed_field_names = []
        for field_name in field_names:
            if not field_name in ('-datetime', 'datetime'):
                processed_field_names.append(field_name)
                continue
            # Replace field name with set of foreign-keys
            datetime_ordering = ['_datetime__year', '_datetime__month',
                                 '_datetime__day', '_datetime__hour',
                                 '_datetime__minute', '_datetime__second']
            if field_name[0] == '-':
                datetime_ordering = ['-' + f for f in datetime_ordering]
            processed_field_names += datetime_ordering
        return super(ReadingQuerySet, self).order_by(*processed_field_names)


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


class ReadingReportsQuerySet(ReadingQuerySet):
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
    objects = ReadingQuerySet.as_manager()

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

    def __repr__(self):
        return 'Reading at {} of {} (increment: {}'.format(
            self.datetime.isoformat(), self.value_total, self.value_increment)


class ReadingDateTime(models.Model):

    year = models.SmallIntegerField()
    month = models.SmallIntegerField()
    day = models.SmallIntegerField()
    hour = models.SmallIntegerField()
    minute = models.SmallIntegerField()
    second = models.SmallIntegerField()

    class Meta:
        unique_together = (('year', 'month', 'day', 'hour', 'minute', 'second'),)