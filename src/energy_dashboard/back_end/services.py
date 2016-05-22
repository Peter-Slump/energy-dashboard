from energy_dashboard.back_end.models import Reading


def reading_post_save_handler(instance, update_fields, **kwargs):
    """
    Signal handler to make sure that the the value_increment of the next reading
    is updated when required.
    :param instance:
    :param update_fields:
    """
    if update_fields is not None and 'value_total' not in update_fields:
        return

    try:
        next_reading = Reading.objects.filter(power_meter=instance.power_meter,
                                              datetime__gt=instance.datetime)\
            .order_by('-datetime')[0]
    except IndexError:
        return

    next_reading.value_increment = next_reading.value_total - instance.value_total
    next_reading.save(update_fields=('value_increment',))
