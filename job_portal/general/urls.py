
from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.index),
    path('index', views.index),
    path('logins', views.login_seeker, name='logins_seeker'),
    path('loginr', views.login_recruiter, name='login_recruiter'),
    path('seeker', views.Seeker, name='seeker'),
    path('recruiter', views.Recruiter, name='recruiter'),
    path('about', views.about, name='About'),
    path('team', views.team, name='team'),
    path('terms', views.terms, name='Terms of Use'),
    path('faq', views.faq, name="FAQs"),
    path('home-recruiter', include('recruiter.urls')),
    path('home-seeker', include('seeker.urls'))
]
