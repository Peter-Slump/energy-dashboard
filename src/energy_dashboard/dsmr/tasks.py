from __future__ import absolute_import

from celery import shared_task
from django.contrib.auth.models import User

import energy_dashboard.dsmr.services.telegram


@shared_task
def parse_telegram(user_id, telegram):
    user = User.objects.get(pk=user_id)
    energy_dashboard.dsmr.services.telegram.parse(user, telegram)


@shared_task
def add(x, y):
    return x + y


@shared_task
def mul(x, y):
    return x * y


@shared_task
def xsum(numbers):
    return sum(numbers)
