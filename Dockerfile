FROM python:2.7-alpine

EXPOSE 8000

RUN apk update && apk add git postgresql-dev gcc musl-dev

RUN pip install -U pip
RUN pip install -U setuptools wheel

# Temporary until dsmr_reader is in PyPi
RUN pip install git+https://github.com/ndokter/dsmr_reader.git#egg=dsmr_reader

RUN pip install git+https://github.com/peter-slump/energy-dashboard@v0.0.13#egg=energy-dashboard

RUN mkdir -p /static

RUN energy-dashboard install

ADD settings_docker.py energy_dashboard/energy_dashboard/

ENV DJANGO_SETTINGS_MODULE energy_dashboard.settings_docker

CMD cd energy_dashboard \
    && ./manage.py collectstatic --noinput \
    && ./manage.py migrate \
    && ./manage.py supervisor