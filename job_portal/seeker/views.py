from django.shortcuts import render
from recruiter.models import Job

from django.template import loader
# from django.http import HttpResponse
from django.forms import modelformset_factory
from recruiter.forms import PostJobForm
from django.contrib import messages
# Create your views here.

def display(request):
    jobs = Job.objects.all()
    return render(request, 'seekerdisplay.html', {
        'jobs' : jobs
    })