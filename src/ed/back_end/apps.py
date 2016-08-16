from django.apps import AppConfig
from django.db.models.signals import post_save

VALUE_INCREMENT_SIGNAL_UID = 'value-increment-signal'


class EnergyDashboardBackEndAppConfig(AppConfig):
    name = 'ed.back_end'
    verbose_name = "Energy Dashboard Back-end"

    def ready(self):
        from ed.back_end.models import Reading
        from ed.back_end.services import reading_post_save_handler

        post_save.connect(reading_post_save_handler, sender=Reading,
                          dispatch_uid=VALUE_INCREMENT_SIGNAL_UID)
