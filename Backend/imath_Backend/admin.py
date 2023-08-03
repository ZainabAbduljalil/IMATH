from django.contrib import admin
from .models import Admin,Provider,Course

# Register your models here.
admin.site.register(Admin)
admin.site.register(Provider)
admin.site.register(Course)