from django.views.decorators.cache import cache_control
from rest_framework import (
    generics,
    mixins,
    permissions,
    views,
    viewsets
)
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

from energy_dashboard.back_end.api.serializers import (
    ReadingReportSerializer,
    PowerMeterSerializer,
    ReadingSerializer)
from energy_dashboard.back_end.models import Reading, PowerMeter


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'power-meters': reverse('power-meter-list', request=request,
                                format=format),
        'readings': reverse('reading-list', request=request, format=format),
    })


class ReadingReportList(views.APIView):

    @classmethod
    def as_view(cls, **initkwargs):
        view = super(ReadingReportList, cls).as_view(**initkwargs)
        return cache_control(max_age=300)(view)

    def get(self, request, *args, **kwargs):
        query_set = Reading.reports.filter(
            power_meter=self.kwargs['power_meter'],
            datetime__gte=self.kwargs['start'],
            datetime__lt=self.kwargs['end']
        )
        query_set = getattr(query_set, self.kwargs['step_size'])()

        serializer = ReadingReportSerializer(query_set, many=True,
                                             context={'request': request})
        return Response(serializer.data)


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
