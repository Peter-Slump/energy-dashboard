# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.9.6 on 2016-06-20 20:55
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('back_end', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='powermeter',
            name='owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='power_meters', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
