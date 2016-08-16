from django.conf.urls import url

from ed.front_end import views

urlpatterns = [
    # Route all to the index view (front-end will process that path).
    url(r'^.*$', views.IndexView.as_view(), name='index'),
]
