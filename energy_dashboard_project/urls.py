from django.conf.urls import url, include

import apps.dashboard.urls
import apps.logger.api.urls


urlpatterns = [
    url(r'^api/', include(apps.logger.api.urls.url_patterns, namespace='api')),
    url(r'^', include(apps.dashboard.urls.urlpatterns, namespace='dashboard')),
]
