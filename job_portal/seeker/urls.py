from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('/', views.home),
    path('/home', views.home),
    path('/index', views.home),
    path('/jobs', views.jobs),
    path('/about', views.about),
    path('/contact', views.contact)
]
