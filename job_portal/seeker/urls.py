from django.urls import path 
from . import views

urlpatterns = [
    path("job/", views.display, name = "home"),
]