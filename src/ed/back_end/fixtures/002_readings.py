import decimal
import random

from datetime import timedelta

from django.utils import timezone
from dynamic_fixtures.fixtures.basefixture import BaseFixture

from ed.back_end.factories import ReadingFactory
from ed.back_end.models import PowerMeter


class Fixture(BaseFixture):

    dependencies = (
        ('back_end', '001_power_meter'),
    )

    def load(self):
        now = timezone.now()

        for power_meter in PowerMeter.objects.all():

            value_total = 50000
            current_date = timezone.now() - timedelta(days=1)
            while current_date < now:
                value_increment = decimal.Decimal(random.randrange(1, 300)) / 1000
                value_total += value_increment

                ReadingFactory(power_meter=power_meter,
                               datetime=current_date,
                               value_increment=value_increment,
                               value_total=value_total)

                if power_meter.unit == PowerMeter.UNIT_KWH:
                    current_date = current_date + timedelta(minutes=1)
                    break
                else:
                    current_date = current_date + timedelta(hours=1)
