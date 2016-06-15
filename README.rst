================
Energy Dashboard
================

A dashboard to keep track of your energy usage.

Installation
============

1. Create virtual environment::

  $ mkdir ~/.virtualenvs && virtualenv ~/.virtualenvs/energy-dashboard
  $ source ~/.virtualenvs/energy-dashboard/bin/activate

2. Install app::

  $ pip install git+https://github.com/peter-slump/energy-dashboard

3. Setup Django app::

  $ ./django-admin startproject energy_dashboard_project

4 Add the following apps to the INSTALLED_APPS list::

    # energy_dashboard_project/energy_dashboard_project/settings.py
    INSTALLED_APPS = [
        ...,
        'rest_framework',
        'energy_dashboard.back_end',
        'energy_dashboard.front_end'
    ]

5 Configure urls::

    # energy_dashboard_project/energy_dashboard_project/settings.py
    ROOT_URLCONF = 'energy_dashboard_project.urls'

6. Run::

  $ ./manage.py runserver

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