#!/usr/bin/env python
import os
import sys


def execute():
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "energy_dashboard.settings")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    execute()
