from django.shortcuts import render

from rest_framework import viewsets
from .models import Disease, Symptom
from .serializers import DiseaseSerializer, SymptomSerializer , DiagnosisRequestSerializer
from .utils import diagnose_disease
from rest_framework.response import Response

class DiseaseViewSet(viewsets.ModelViewSet):
    queryset = Disease.objects.all()
    serializer_class = DiseaseSerializer

class SymptomViewSet(viewsets.ModelViewSet):
    queryset = Symptom.objects.all()
    serializer_class = SymptomSerializer

class DiagnosisViewSet(viewsets.ViewSet):
    def create(self, request):
        
        serializer = DiagnosisRequestSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            symptoms = serializer.validated_data['symptoms']
            possible_disease = diagnose_disease(symptoms)
            description = Disease.objects.get(name=possible_disease).description
            treatments = Disease.objects.get(name=possible_disease).treatments
            return Response({'disease': possible_disease, 'description': description, 'treatments': treatments})
        else:
            return Response(serializer.errors, status=400)


# Create your views here.
