#!/usr/bin/env python
from __future__ import absolute_import

import sys

from django.conf import settings
from django.core import management


def execute_from_command_line():
    settings.configure()
    settings.INSTALLED_APPS = list(settings.INSTALLED_APPS) + ['ed.bin']
    management.execute_from_command_line(sys.argv)

if __name__ == "__main__":
    execute_from_command_line()
