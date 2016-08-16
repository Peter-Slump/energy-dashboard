from rest_framework import permissions


class ReadingAccessPermission(permissions.BasePermission):

    message = 'Cannot retrieve readings for a power meter you don\'t own'

    def has_permission(self, request, view):
        return request.user.power_meters\
                           .filter(pk=view.kwargs['power_meter'])\
                           .exists()
