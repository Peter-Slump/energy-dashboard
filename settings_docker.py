from energy_dashboard.settings import *

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'postgres',
        'HOST': 'postgres',
        'PORT': '5432',
    }
}

ALLOWED_HOSTS = ['*']

DEBUG = False

BROKER_URL = 'redis://redis:6379/0'

STATIC_ROOT = '/static'
