from dateutil import tz

import factory
from django.contrib.auth.models import User

from django.db.models.signals import post_save

from ed.back_end.models import Reading, PowerMeter


class UserFactory(factory.DjangoModelFactory):

    class Meta:
        model = User

    username = factory.Faker('user_name')
    email = factory.Faker('email')


class PowerMeterFactory(factory.DjangoModelFactory):

    class Meta:
        model = PowerMeter

    name = factory.Faker('word')
    owner = factory.SubFactory(UserFactory)


@factory.django.mute_signals(post_save)
class ReadingFactory(factory.DjangoModelFactory):

    class Meta:
        model = Reading

    power_meter = factory.SubFactory(PowerMeterFactory)
    datetime = factory.Faker('date_time_between', start_date="-1y",
                             end_date="now", tzinfo=tz.gettz('UTC'))
    value_increment = factory.Faker('pydecimal', left_digits=5, right_digits=3, positive=True)
    value_total = factory.Faker('pydecimal', left_digits=15, right_digits=3, positive=True)
