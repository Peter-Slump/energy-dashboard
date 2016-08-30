FROM python:2.7-alpine

EXPOSE 8000

RUN apk update && apk add git postgresql-dev gcc musl-dev

RUN mkdir -p /code

RUN pip install -U pip
RUN pip install -U setuptools wheel

#RUN pip install git+https://github.com/peter-slump/energy-dashboard@v0.0.13#egg=energy-dashboard
ADD . /code
RUN pip install -e /code

RUN mkdir -p /static

RUN energy-dashboard install

ADD docker_files/settings_docker.py energy_dashboard/energy_dashboard/

ENV DJANGO_SETTINGS_MODULE energy_dashboard.settings_docker

CMD cd energy_dashboard \
    && pip install -U -e /code \
    && ./manage.py collectstatic --noinput \
    && ./manage.py migrate \
    && ./manage.py supervisor