from django.contrib.auth.models import User
from dynamic_fixtures.fixtures.basefixture import BaseFixture

from energy_dashboard.back_end.factories import PowerMeterFactory


class Fixture(BaseFixture):

    dependencies = (
        ('back_end', '001_user'),
    )

    def load(self):
        user = User.objects.first()

        PowerMeterFactory(owner=user, name='Gas', unit='m3')
        PowerMeterFactory(owner=user, name='Consumed electricity (day)', unit='kwh')
        PowerMeterFactory(owner=user, name='Consumed electricity (night)', unit='kwh')
        PowerMeterFactory(owner=user, name='Produced electricity', unit='kwh')