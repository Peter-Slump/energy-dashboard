from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import (
    authentication,
    generics,
    permissions,
    status,
)
from rest_framework.response import Response

from energy_dashboard.dsmr.api.serializers import TelegramSerializer
from energy_dashboard.dsmr.tasks import parse_telegram


class TelegramList(generics.GenericAPIView):

    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (authentication.TokenAuthentication,)
    serializer_class = TelegramSerializer

    @method_decorator(csrf_exempt)
    def post(self, request, *args, **kwargs):
        serializer = TelegramSerializer(data=request.data)
        if serializer.is_valid():
            parse_telegram.delay(telegram=serializer.data['content'],
                                 user_id=self.request.user.pk)
            return Response(None, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
