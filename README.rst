================
Energy Dashboard
================

A dashboard to keep track of your energy usage.

Quick setup
===========

1. Create virtual environment (Optional but highly recommended)::

  $ mkdir ~/.virtualenvs && virtualenv ~/.virtualenvs/energy-dashboard
  $ source ~/.virtualenvs/energy-dashboard/bin/activate

2. Install app::

  $ pip install git+https://github.com/peter-slump/energy-dashboard

3. Run a quick server::

  $ energy-dashboard runserver --insecure

Proper setup
============

1. Follow the steps of "Quick setup"

2. Create settings file::

  $ touch settings_ed.py

3. Configure application::

  # import all default settings
  from energy_dashboard.config.defaults import *

  # SECURITY WARNING: keep the secret key used in production secret!
  SECRET_KEY = ' ** REPLACE WITH SECRET VALUE ** '

  # Setup database (https://docs.djangoproject.com/en/1.9/ref/settings/#databases)

3. Run application with settings from created settings file*::

  $ PYTHONPATH=$PYTHONPATH:$PWD DJANGO_SETTINGS_MODULE=settings_ed energy-dashboard runserver

\* example expects that command is invoked from folder where settings.py is
created. Otherwise replace $PWD with the path where the settings.py can be
found.

Development
===========

Run Python tests::

  $ python setup.py test

Build development front-end bundle::

  $ npm start

Build production front-end bundle::

  $ npm build

Install some test data. First add 'dynamic_fixtures' to the installed apps::

    # energy_dashboard_project/energy_dashboard_project/settings.py
    if DEBUG:
        INSTALLED_APPS = INSTALLED_APPS + ['dynamic_fixtures']

Load dummy data::

    $ ./manage.py load_dynamic_fixtures


Screenshots
===========

.. image:: screenshot.png
