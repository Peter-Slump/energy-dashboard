import factory

from django.db.models.signals import post_save

from energy_dashboard.back_end.models import Reading, PowerMeter


class PowerMeterFactory(factory.DjangoModelFactory):

    class Meta:
        model = PowerMeter

    name = factory.Faker('word')


@factory.django.mute_signals(post_save)
class ReadingFactory(factory.DjangoModelFactory):

    class Meta:
        model = Reading

    power_meter = factory.SubFactory(PowerMeterFactory)
    datetime = factory.Faker('date_time_between', start_date="-1y",
                             end_date="now")
    value_increment = factory.Faker('pydecimal', left_digits=5, right_digits=3, positive=True)
    value_total = factory.Faker('pydecimal', left_digits=15, right_digits=3, positive=True)
