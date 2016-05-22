from dynamic_fixtures.fixtures.basefixture import BaseFixture

from energy_dashboard.back_end.factories import PowerMeterFactory


class Fixture(BaseFixture):

    def load(self):
        PowerMeterFactory(name='Gas', unit='m3')
        PowerMeterFactory(name='Consumed electricity (day)', unit='kwh')
        PowerMeterFactory(name='Consumed electricity (night)', unit='kwh')
        PowerMeterFactory(name='Produced electricity', unit='kwh')