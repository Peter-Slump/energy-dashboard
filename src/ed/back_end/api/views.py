from django.views.decorators.cache import cache_control
from rest_framework import (
    generics,
    mixins,
    permissions,
    viewsets
)
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

from ed.back_end.api.serializers import (
    ReadingReportSerializer,
    PowerMeterSerializer,
    ReadingSerializer)
from ed.back_end.models import Reading
from ed.back_end.api.permissions import ReadingAccessPermission


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'power-meters': reverse('power-meter-list', request=request,
                                format=format),
        'readings': reverse('reading-list', request=request, format=format),
        'auth': {
            'login': reverse('rest_login', request=request, format=format),
            'logout': reverse('rest_logout', request=request, format=format),
            'user': reverse('rest_user_details', request=request, format=format),
        }
    })


class ReadingReportList(generics.ListAPIView):

    permission_classes = (
        permissions.IsAuthenticated,
        ReadingAccessPermission
    )
    serializer_class = ReadingReportSerializer

    @classmethod
    def as_view(cls, **initkwargs):
        view = super(ReadingReportList, cls).as_view(**initkwargs)
        return cache_control(max_age=300)(view)

    def get_serializer_context(self):
        return {'request': self.request}

    def get_queryset(self):
        queryset = Reading.reports.filter(
            power_meter=self.kwargs['power_meter'],
            datetime__gte=self.kwargs['start'],
            datetime__lt=self.kwargs['end']
        )
        queryset = getattr(queryset, self.kwargs['step_size'])()
        return queryset


class PowerMeterViewSet(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = PowerMeterSerializer

    def get_queryset(self):
        return self.request.user.power_meters.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ReadingList(mixins.CreateModelMixin, generics.GenericAPIView):

    queryset = Reading.objects.all()
    serializer_class = ReadingSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
