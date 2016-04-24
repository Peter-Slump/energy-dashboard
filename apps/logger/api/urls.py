from django.conf.urls import patterns, url

from apps.logger.api.views import ElectricityUsageActual, \
    ElectricityUsageTotal, GasUsageTotal

url_patterns = patterns('',
    url(r'^electricity/actual/$', ElectricityUsageActual.as_view()),
    url(r'^electricity/used/$', ElectricityUsageTotal.as_view()),
    url(r'^gas/used/$', GasUsageTotal.as_view()),
)
