from django.shortcuts import render

from django.http import HttpResponse


def home(request):
    return render(request, 'seeker/index.html')

def about(request):
    return render(request, 'seeker/about.html')

def jobs(request):
    return render(request, 'seeker/jobs.html')

def contact(request):
    return render(request, 'seeker/contact.html')