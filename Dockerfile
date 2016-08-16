FROM python:2.7-alpine

EXPOSE 8025

RUN apk update && apk add git

RUN pip install -U pip
RUN pip install -U setuptools wheel

# Temporary until dsmr_reader is in PyPi
RUN pip install git+https://github.com/ndokter/dsmr_reader.git#egg=dsmr_reader

RUN pip install git+https://github.com/peter-slump/energy-dashboard@v0.0.12#egg=energy-dashboard

RUN energy-dashboard install

ADD settings_docker.py energy_dashboard_project/

CMD DJANGO_SETTINGS_MODULE=energy_dashboard_project.settings_docker \
    cd energy_dashboard_project \
    && ./manage.py migrate \
    && ./manage.py supervisor