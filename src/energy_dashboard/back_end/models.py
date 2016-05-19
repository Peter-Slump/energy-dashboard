from django.db import connections, models
from django.db.models.aggregates import Sum
from django.utils.translation import ugettext as _


class PowerMeter(models.Model):

    UNITS = (
        ('kwh', _('Kilowatt hour')),
        ('m3', _('Cubic meter'))
    )

    name = models.CharField(max_length=255)
    unit = models.CharField(choices=UNITS, max_length=10)


class ReadingReportsQuerySet(models.QuerySet):

    SQLITE = 'django.db.backends.sqlite3'
    DATETIME_FIELD_FORMATTING = {
        'minutely': {
            SQLITE: "strftime('%%Y-%%m-%%dT%%H:%%M:00', datetime)"
        },
        'hourly': {
            SQLITE: "strftime('%%Y-%%m-%%dT%%H:00:00', datetime)"
        },
        'daily': {
            SQLITE: "strftime('%%Y-%%m-%%dT00:00:00', datetime)"
        },
        'monthly': {
            SQLITE: "strftime('%%Y-%%m-01T00:00:00', datetime)"
        },
        'yearly': {
            SQLITE: "strftime('%%Y-01-01T00:00:00', datetime)"
        }
    }

    def minutely(self):
        formattings = self.DATETIME_FIELD_FORMATTING['minutely']
        return self._datetime_aggregate(formattings=formattings)

    def hourly(self):
        formattings = self.DATETIME_FIELD_FORMATTING['hourly']
        return self._datetime_aggregate(formattings=formattings)

    def daily(self):
        formattings = self.DATETIME_FIELD_FORMATTING['daily']
        return self._datetime_aggregate(formattings=formattings)

    def monthly(self):
        formattings = self.DATETIME_FIELD_FORMATTING['monthly']
        return self._datetime_aggregate(formattings=formattings)

    def yearly(self):
        formattings = self.DATETIME_FIELD_FORMATTING['yearly']
        return self._datetime_aggregate(formattings=formattings)

    def _datetime_aggregate(self, formattings):
        """
        :param dict formattings: key=db engine module, value=formatting for
                                 datetime aggregation
        :return: list with dicts
        """
        db_engine = self._engine

        if db_engine not in formattings:
            raise NotImplementedError('Database engine "%s" is not supported.',
                                      db_engine)

        formatting = formattings[db_engine]
        return self.extra(select={'datetime__aggregate': formatting})\
            .values('power_meter', 'datetime__aggregate')\
            .annotate(Sum('value_increment'))

    @property
    def _engine(self):
        return connections.databases[self.db]['ENGINE']


class Reading(models.Model):

    reports = ReadingReportsQuerySet.as_manager()

    power_meter = models.ForeignKey('back_end.PowerMeter')
    datetime = models.DateTimeField()
    value_increment = models.DecimalField()
    value_total = models.DecimalField()

    class Meta:
        db_table = 'reading'