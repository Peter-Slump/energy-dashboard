from django.views.generic import TemplateView


class Index(TemplateView):
    template_name = 'dashboard/index.html'


class ElectricityUsed(TemplateView):
    template_name = 'dashboard/electricity_used.html'


class GasUsed(TemplateView):
    template_name = 'dashboard/gas_used.html'
