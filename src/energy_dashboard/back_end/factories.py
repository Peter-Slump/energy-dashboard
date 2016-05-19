import factory

from energy_dashboard.back_end.models import Reading, PowerMeter


class PowerMeterFactory(factory.DjangoModelFactory):

    class Meta:
        model = PowerMeter

    name = factory.Faker('word')


class ReadingFactory(factory.DjangoModelFactory):

    class Meta:
        model = Reading

    power_meter = factory.SubFactory('energy_dashboard_project.back_end.factories.PowerMeterFactory')
    datetime = factory.Faker('date_time_between', start_date="-1y", end_date="now")
    value_increment = factory.Faker('pydecimal', right_digits=3, positive=True)
    value_total = factory.Faker('pydecimal', right_digits=3, positive=True)