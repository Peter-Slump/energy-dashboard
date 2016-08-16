from os import path

from django.core.management.commands.startproject import Command as BaseCommand

import energy_dashboard


class Command(BaseCommand):

    DEFAULT_NAME = 'energy_dashboard_project'

    def run_from_argv(self, argv):
        try:
            name = argv[2]
        except IndexError:
            argv.append(self.DEFAULT_NAME)
        else:
            if name.startswith('--'):
                argv = argv[0:2] + [self.DEFAULT_NAME] + argv[2:]
        super(Command, self).run_from_argv(argv=argv)

    def add_arguments(self, parser):
        super(Command, self).add_arguments(parser=parser)

        parser.set_defaults(**{
            'extension': 'py,conf',
            'template': path.join(energy_dashboard.__path__[0], 'conf',
                                  'project_template')})
