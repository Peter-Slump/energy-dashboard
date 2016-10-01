from django.contrib import admin
from ed.back_end.models import PowerMeter, Reading


class PowerMeterAdmin(admin.ModelAdmin):
    search_fields = ('name', 'current_value', 'current_value_datetime')


class ReadingAdmin(admin.ModelAdmin):
    date_hierarchy = 'datetime'
    list_display = ('power_meter', 'datetime', 'value_total')
    fields = ('power_meter', 'value_total', 'value_increment', 'datetime')
    list_filter = ('power_meter', 'datetime')

admin.site.register(PowerMeter, PowerMeterAdmin)
admin.site.register(Reading, ReadingAdmin)
