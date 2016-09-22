================
Energy Dashboard
================

A dashboard to keep track of your energy usage.

.. image:: screenshot.png


Docker compose setup
====================

1. Install app::

  $ git clone git+https://github.com/peter-slump/energy-dashboard@v0.0.18
  $ docker-compose up

2. Create superuser::

  $ docker exec -it energydashboard_energy-dashboard_1 ./energy_dashboard/manage.py createsuperuser

3. Visit the admin http://127.0.0.1:8080/admin/::

  $ Log in and create some power meters.

4. Visit the dashboard http://127.0.0.1:8080/


Quick setup
===========

1. Create virtual environment (Optional but highly recommended)::

  $ mkdir -p ~/.virtualenvs && virtualenv --python=python2 ~/.virtualenvs/energy-dashboard

  $ source ~/.virtualenvs/energy-dashboard/bin/activate

2. Install app::

  $ pip install git+https://github.com/peter-slump/energy-dashboard@v0.0.18#egg=energy-dashboard

  $ energy-dashboard install

3. Run server::

  $ cd energy_dashboard && ./manage.py runserver

Development
===========

Python
------

Setup environment::

  $ make install-python

Run Python tests::

  $ python setup.py test

Load dummy data::

    $ ./manage.py load_dynamic_fixtures

Front-end
---------

Build development front-end bundle::

  $ npm run webpack-dev

Build production front-end bundle::

  $ npm run webpack-prod
