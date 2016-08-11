================
Energy Dashboard
================

A dashboard to keep track of your energy usage.

Quick setup
===========

1. Create virtual environment (Optional but highly recommended)::

  $ mkdir -p ~/.virtualenvs && virtualenv ~/.virtualenvs/energy-dashboard

  $ source ~/.virtualenvs/energy-dashboard/bin/activate

2. Install app::

  $ pip install git+https://github.com/peter-slump/energy-dashboard@v0.0.6#egg=energy-dashboard

  $ energy-dashboard install ed

3. Run a quick server::

  $ cd ed

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
