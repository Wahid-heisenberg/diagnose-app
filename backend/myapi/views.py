from django.shortcuts import render

from rest_framework import viewsets
from .models import Disease, Symptom
from .serializers import DiseaseSerializer, SymptomSerializer

class DiseaseViewSet(viewsets.ModelViewSet):
    queryset = Disease.objects.all()
    serializer_class = DiseaseSerializer

class SymptomViewSet(viewsets.ModelViewSet):
    queryset = Symptom.objects.all()
    serializer_class = SymptomSerializer




# Create your views here.
