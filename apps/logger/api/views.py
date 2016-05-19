import datetime

from django.utils import timezone
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.logger.models import ElectricityUsedReading, GasReading, \
    AGGREGATE_HOUR


class ElectricityUsageActual(APIView):

    def get(self, request, format=None):

        return Response(ElectricityUsedReading.reports.actual())


class ElectricityUsageTotal(APIView):

    def get(self, request, format=None):
        end = timezone.now()
        start = end - datetime.timedelta(days=1)

        return Response(
            ElectricityUsedReading.reports.used(
                start=start,
                end=end,
                aggregate_by=AGGREGATE_HOUR
            )
        )


class GasUsageTotal(APIView):

    def get(self, request, format=None):
        end = timezone.now()
        start = end - datetime.timedelta(days=1)

        return Response(
            GasReading.reports.used(
                start=start,
                end=end,
                aggregate_by=AGGREGATE_HOUR
            )
        )
