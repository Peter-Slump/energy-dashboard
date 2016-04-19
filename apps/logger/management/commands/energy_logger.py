from django.core.management import BaseCommand

import apps.logger.backends.dsmr.versions.v4.reader


READER_BACKENDS = {
    'dsmr': {
        '4': apps.logger.backends.dsmr.versions.v4.reader.Reader
    },
    'iskra': {
        # '1': backends.iskra.loggers.version_1.Logger
    }
}


class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('backend', type=str)
        parser.add_argument('protocol_version', type=str)
        parser.add_argument('device', type=str)

    def handle(self, *args, **options):

        reader_backend = READER_BACKENDS[options['backend']]
        reader = reader_backend[options['protocol_version']]
        device = options['device']

        reader = reader(device)

        for reading in reader.read:
            reading.save()

