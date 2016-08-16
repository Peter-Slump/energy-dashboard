FROM python:2.7-alpine

RUN apk update && apk add git

RUN pip install -U pip
RUN pip install -U setuptools wheel
RUN pip install git+https://github.com/peter-slump/energy-dashboard@v0.0.8#egg=energy-dashboard

RUN energy-dashboard install

CMD cd energy_dashboard_project && ./manage.py runserver