from rest_framework import serializers

from energy_dashboard.back_end.models import Reading, PowerMeter


class ReadingSerializer(serializers.HyperlinkedModelSerializer):

    power_meter = serializers.HyperlinkedRelatedField(
        queryset=PowerMeter.objects.all(), view_name='power-meter-detail')

    class Meta:
        model = Reading
        fields = ('id', 'power_meter', 'value_total', 'datetime')


class PowerMeterSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = PowerMeter
        fields = ('id', 'name', 'unit')


class ReadingReportSerializer(serializers.Serializer):

    datetime = serializers.DateTimeField()
    value_increment = serializers.DecimalField(max_digits=18, decimal_places=3)
    power_meter = serializers.HyperlinkedIdentityField(
        view_name='power-meter-detail', lookup_field='power_meter', many=False,
        lookup_url_kwarg='pk')
