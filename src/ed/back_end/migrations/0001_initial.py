# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.9.6 on 2016-05-22 13:00
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import django.db.models.manager


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PowerMeter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('unit', models.CharField(choices=[('kwh', 'kWh'), ('m3', 'm³')], max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Reading',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value_increment', models.DecimalField(decimal_places=3, max_digits=18)),
                ('value_total', models.DecimalField(decimal_places=3, max_digits=18)),
                ('datetime', models.DateTimeField()),
                ('year', models.SmallIntegerField()),
                ('month', models.SmallIntegerField()),
                ('day', models.SmallIntegerField()),
                ('hour', models.SmallIntegerField()),
                ('minute', models.SmallIntegerField()),
                ('second', models.SmallIntegerField()),
                ('power_meter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_end.PowerMeter')),
            ],
            managers=[
                ('reports', django.db.models.manager.Manager()),
            ],
        ),
    ]
