from decimal import Decimal

from ed.back_end.models import Reading


def reading_post_save_handler(instance, update_fields, **kwargs):
    """
    Signal handler to make sure that the the value_increment of the next
    reading is updated when required.
    :param instance:
    :param update_fields:
    """
    if update_fields is not None and 'value_total' not in update_fields:
        return

    try:
        next_ = Reading.objects.filter(power_meter=instance.power_meter,
                                       datetime__gt=instance.datetime)\
                               .order_by('-datetime')[0]
    except IndexError:
        return

    next_.value_increment = next_.value_total - instance.value_total
    next_.save(update_fields=('value_increment',))


def add_reading(power_meter, value_total, datetime, current_value=None):
    """
    Add a new reading to the database.

    :param ed.back_end.models.PowerMeter power_meter:
    :param float value_total: Total meter value
    :param datetime.DateTime datetime: Timestamp of reading
    :param decimal.Decimal current_value: Current value for the meter (snapshot)
    :return:
    """
    value_total = Decimal(value_total)

    try:
        previous_reading = Reading.objects\
            .filter(
                power_meter=power_meter,
                datetime__lt=datetime) \
            .order_by('-datetime')[0]

    except IndexError:
        value_increment = 0
    else:
        value_increment = value_total - previous_reading.value_total

    if current_value is not None:
        power_meter.current_value = current_value
        power_meter.current_value_datetime = datetime
        power_meter.save(update_fields=('current_value', 'current_value_datetime'))

    return Reading.objects.update_or_create(
        power_meter=power_meter,
        datetime=datetime,
        defaults={
            'value_total': value_total,
            'value_increment': value_increment,
        })
