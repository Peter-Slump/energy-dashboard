from dynamic_fixtures.fixtures.basefixture import BaseFixture

from energy_dashboard.back_end.factories import PowerMeterFactory, \
    ReadingFactory


class Fixture(BaseFixture):

    def load(self):
        power_meter = PowerMeterFactory(name='Consumed electricity (day)',
                                        unit='kwh')
        ReadingFactory.create_batch(1000, power_meter=power_meter)
