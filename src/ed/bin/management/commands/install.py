from os import path

from django.core.management.commands.startproject import Command as BaseCommand

import ed


class Command(BaseCommand):

    DEFAULT_NAME = 'energy_dashboard'

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
            'extensions': ['py', 'conf'],
            'template': path.join(ed.__path__[0], 'conf',
                                  'project_template')})
