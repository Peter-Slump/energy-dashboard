from rest_framework import serializers

from energy_dashboard.back_end.models import Reading, PowerMeter


class ReadingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reading
        fields = ('id', 'power_meter', 'value_total', 'datetime')


class PowerMeterSerializer(serializers.ModelSerializer):

    class Meta:
        model = PowerMeter
        fields = ('name', 'unit')


class ReadingReportSerializer(serializers.Serializer):

    datetime = serializers.DateTimeField()
    value_increment = serializers.DecimalField(max_digits=18, decimal_places=3)
    power_meter = serializers.PrimaryKeyRelatedField(
        many=False,
        queryset=PowerMeter.objects.all()
    )
