from django.contrib import admin
from django.urls import path
from . import views

urlpatterns=[
    path('api/imath/',views.AvilableCourseView.as_view() ),
    path('api/imath/addcourse/',views.CourseCreate.as_view()),
    path('api/imath/addprovider/',views.ProviderCreate.as_view()),
    path('api/imath/detail',views.DetailView.as_view())
]