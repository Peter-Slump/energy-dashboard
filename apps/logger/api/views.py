from rest_framework.response import Response
from rest_framework.views import APIView

from apps.logger.models import ElectricityUsedReading, GasReading


class ElectricityUsageActual(APIView):

    def get(self, request, format=None):

        return Response(ElectricityUsedReading.reports.actual())


class ElectricityUsageTotal(APIView):

    def get(self, request, format=None):

        return Response(
            ElectricityUsedReading.reports.used(
                start=None,
                end=None,
                aggregate=None
            )
        )


class GasUsageTotal(APIView):

    def get(self, request, format=None):

        return Response(
            GasReading.reports.used(
                start=None,
                end=None,
                aggregate=None
            )
        )
