from django.contrib.auth.models import User
from dynamic_fixtures.fixtures.basefixture import BaseFixture

from ed.back_end.factories import PowerMeterFactory
from ed.back_end.models import PowerMeter


class Fixture(BaseFixture):

    dependencies = (
        ('back_end', '001_user'),
    )

    def load(self):
        user = User.objects.first()

        pms = [
            ('Consumed electricity (day)', 'kwh'),
            ('Gas', 'm3'),
        ]

        for pm in pms:
            if not PowerMeter.objects.filter(name=pm[0], unit=pm[1], owner=user).exists():
                PowerMeterFactory(owner=user, name=pm[0], unit=pm[1])

        # PowerMeterFactory(owner=user, name='Gas', unit='m3')

        # PowerMeterFactory(owner=user, name='Consumed electricity (night)',
        #                   unit='kwh')
        # PowerMeterFactory(owner=user, name='Produced electricity', unit='kwh')
