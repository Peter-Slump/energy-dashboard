from django.conf.urls import url

from apps.dashboard.views import Index, ElectricityUsed, GasUsed


urlpatterns = [
    url(r'^$', Index.as_view(), name='index'),
    url(r'^electricity/used/$', ElectricityUsed.as_view(), name='electricity-used'),
    url(r'^gas/used/$', GasUsed.as_view(), name='gas-used'),
]
