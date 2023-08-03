from django.db import models
# from token_auth.models import User

# Create your models here.

class position(models.TextChoices):
    Owner='owner',
    Admin1='Admin1',
    secretary='secretary',

class location(models.Choices):
    physically='Physically'
    Online= 'Online'

# https://api.mapbox.com/directions/v5/mapbox/driving/50.483536%2C26.102757%3B50.490604%2C26.081808?alternatives=false&annotations=distance&geometries=geojson&overview=full&steps=false&access_token=pk.eyJ1IjoiemFpbmFiMmRldmVsb3AiLCJhIjoiY2xrYjE3YW1yMDFtaTNmazZ5YjQ3M2E1aSJ9.F0XZFt5c-z9mLzWpltOdlg

class Admin(models.Model):
    username=models.CharField(max_length=15)
    position=models.CharField(choices=position.choices)
    phone=models.IntegerField()
    # password=models.IntegerField('0000')

class Provider(models.Model):
    Name=models.CharField(max_length=20)
    number=models.IntegerField()
    education=models.CharField(max_length=300)
    comments=models.CharField(max_length=500)
    def __str__(self):
        return f'{self.Name}'


class Course(models.Model):
    courseName=models.CharField(max_length=10)
    courseProvider=models.ForeignKey(Provider,on_delete=models.CASCADE)
    price=models.IntegerField()
    location=models.CharField(choices=location.choices)
    duration=models.CharField(max_length=200)
    def __str__(self):
        return f'{self.courseName}'
  
