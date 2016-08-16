from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt

from ed.dsmr.api.views import (
    TelegramList,
)

urlpatterns = [
    url(r'^-telegram/$', csrf_exempt(TelegramList.as_view()),
        name='dsmr-telegram-list')
]
