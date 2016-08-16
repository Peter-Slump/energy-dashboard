from rest_framework import serializers


class Telegram(object):

    def __init__(self, content):
        self.content = content


class TelegramSerializer(serializers.Serializer):

    content = serializers.CharField()
