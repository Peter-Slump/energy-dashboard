from django.conf.urls import url

from energy_dashboard.front_end import views

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='index'),
]
