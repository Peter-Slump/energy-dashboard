from dynamic_fixtures.fixtures.basefixture import BaseFixture

from energy_dashboard.back_end.factories import ReadingFactory
from energy_dashboard.back_end.models import PowerMeter


class Fixture(BaseFixture):

    def load(self):
        for power_meter in PowerMeter.objects.all():
            ReadingFactory.create_batch(500, power_meter=power_meter)
