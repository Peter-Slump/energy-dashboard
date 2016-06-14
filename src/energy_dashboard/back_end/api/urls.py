from django.conf.urls import url

from energy_dashboard.back_end.api.views import (
    api_root,
    PowerMeterViewSet,
    ReadingList,
    ReadingReportList,
)


power_meter_list = PowerMeterViewSet.as_view(actions={
    'get': 'list',
    'post': 'create'
})

power_meter_detail = PowerMeterViewSet.as_view(actions={
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})

urlpatterns = [
    url(r'^$', api_root, name='api_root'),

    url(r'^reading-report/'
        r'(?P<power_meter>\d+)/'
        r'(?P<step_size>minute|hour|day|month|year)/'
        r'(?P<start>\d{4}-\d{1,2}-\d{1,2}[T ]\d{1,2}:\d{1,2}:\d{1,2}(.\d+)?Z)/'
        r'(?P<end>\d{4}-\d{1,2}-\d{1,2}[T ]\d{1,2}:\d{1,2}:\d{1,2})(.\d+)?Z/$',
        ReadingReportList.as_view(),
        name='reading-report'),

    url(r'^power-meter/$', power_meter_list, name='power-meter-list'),
    url(r'^power-meter/(?P<pk>\d+)/$', power_meter_detail,
        name='power-meter-detail'),

    url(r'^reading/$', ReadingList.as_view(), name='reading-list')
]
