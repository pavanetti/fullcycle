from django.core import serializers
from django.http import JsonResponse

from .models import Live


def index(request):
    names = Live.objects.all().values_list('name', flat=True)
    return JsonResponse(list(names), safe=False)
