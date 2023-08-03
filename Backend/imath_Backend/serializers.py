from rest_framework import serializers
from .models import Admin, Provider,Course


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model=Admin
        fields='__all__'


class ProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model=Provider
        fields='__all__'


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model=Course
        # fields=['courseName','price',]
        fields='__all__'

class DetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=Course
        fields='__all__'