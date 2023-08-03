from django.shortcuts import render
from rest_framework.generics import CreateAPIView ,ListAPIView
from rest_framework.permissions import IsAuthenticated
from .models import Course, Provider,Admin
from .serializers import CourseSerializer,ProviderSerializer, DetailSerializer

# Create your views here.

class ProviderCreate(CreateAPIView):
    permission_classes=[IsAuthenticated]
    queryset=Provider.objects.all()
    serializer_class=ProviderSerializer

class CourseCreate(CreateAPIView):
    permission_classes=[IsAuthenticated]
    queryset=Course.objects.all()
    serializer_class=CourseSerializer

class AvilableCourseView(ListAPIView):
    queryset=Course.objects.all()
    serializer_class =CourseSerializer

# views to see more detail about the course
class DetailView(ListAPIView):
    queryset=Course.objects.all()
    serializer_class= DetailSerializer