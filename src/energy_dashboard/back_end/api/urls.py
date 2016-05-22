from django.conf.urls import url

from energy_dashboard.back_end.api.views import ReadingReportList

urlpatterns = [
    url(r'^reading-report/'
        r'(?P<power_meter>\d+)/'
        r'(?P<time_unit>minutely|hourly|daily|monthly|yearly)/'
        r'(?P<start>\d{4}-\d{1,2}-\d{1,2}[T ]\d{1,2}:\d{1,2}:\d{1,2})/'
        r'(?P<end>\d{4}-\d{1,2}-\d{1,2}[T ]\d{1,2}:\d{1,2}:\d{1,2})/$',
        ReadingReportList.as_view()),
]
