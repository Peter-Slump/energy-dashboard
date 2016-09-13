from django.contrib.auth import logout
from django.utils.translation import ugettext_lazy as _

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny


class LogoutView(APIView):

    """
    Calls Django logout method and delete the Token object
    assigned to the current User object.

    The default version from rest_auth deletes the auth_token. This is unwanted
    behaviour and the reason that this is created as an custom implementation.

    Accepts/Returns nothing.
    """
    permission_classes = (AllowAny,)

    def post(self, request):

        logout(request)

        return Response({"success": _("Successfully logged out.")},
                        status=status.HTTP_200_OK)
