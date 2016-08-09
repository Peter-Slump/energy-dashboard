from os import path

from django.core.management.commands.startproject import Command as BaseCommand

import energy_dashboard


class Command(BaseCommand):

    def handle(self, **options):
        options['template'] = path.join(energy_dashboard.__path__[0], 'conf',
                                        'project_template')

        return super(Command, self).handle(**options)