from dynamic_fixtures.fixtures.basefixture import BaseFixture

from ed.back_end.factories import ReadingFactory
from ed.back_end.models import PowerMeter


class Fixture(BaseFixture):

    dependencies = (
        ('back_end', '001_power_meter'),
    )

    def load(self):
        for power_meter in PowerMeter.objects.all():
            ReadingFactory.create_batch(500, power_meter=power_meter)
