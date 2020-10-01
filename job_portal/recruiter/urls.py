from django.urls import path 
from . import views

urlpatterns = [
     path('', views.index, name = 'index'),
     path('display/', views.display, name = 'display'),
     path('dashboard/', views.dashboard, name = 'dashboard'),
     path('job_details/<int:job_id>/', views.job_details, name='job_details'),
     path('job_edit/<int:pk>/edit/', views.JobUpdate.as_view(), name='job_edit'),
     # path('jobnew/', views.jobPost, name='job_new'), # new

]