# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-04-23 13:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ElectricityDeliveredReading',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime', models.DateTimeField(unique=True)),
                ('tariff', models.SmallIntegerField(db_index=True)),
                ('total', models.FloatField()),
                ('actual', models.FloatField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ElectricityUsedReading',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime', models.DateTimeField(unique=True)),
                ('tariff', models.SmallIntegerField(db_index=True)),
                ('total', models.FloatField()),
                ('actual', models.FloatField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='GasReading',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime', models.DateTimeField(unique=True)),
                ('total', models.FloatField()),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
