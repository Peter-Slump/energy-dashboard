from energy_dashboard.back_end.models import Reading


def update_next_reading_value_increment(reading):
    next_reading = get_next_reading(current_reading=reading)
    update_value_increment(previous_reading=reading, reading=next_reading)


def get_next_reading(current_reading):

    Reading.objects.filter(
        power_meter=current_reading.power_meter,
        _datetime__year__gte=current_reading.datetime.year,
        _datetime__month__gte=current_reading.datetime.month,
        _datetime__day__gte=current_reading.datetime.day,
        _datetime__hour__gte=current_reading.datetime.hour,
        _datetime__minute__gte=current_reading.datetime.minute,
        _datetime__second__gte=current_reading.datetime.second
    ).order_by(
        '-_datetime__year',
        '-_datetime__month',
        '-_datetime__day',
        '-_datetime__hour',
        '-_datetime__minute',
        '-_datetime__second'
    )


def update_value_increment(previous_reading, reading):
    reading.update(
        value_increment=previous_reading.value_total - reading.value_total
    )
