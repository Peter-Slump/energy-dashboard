from rest_framework.views import APIView
from rest_framework.response import Response

from energy_dashboard.back_end.api.serializers import ReadingReportSerializer
from energy_dashboard.back_end.models import Reading


class ReadingReportList(APIView):

    def get(self, request, format=None):

        query_set = Reading.reports.filter(
            power_meter=self.kwargs['power_meter'],
            datetime__gte=self.kwargs['start'],
            datetime__lt=self.kwargs['end']
        )

        query_set = getattr(query_set, self.kwargs['time_unit'])

        serializer = ReadingReportSerializer(query_set(), many=True)
        return Response(serializer.data)