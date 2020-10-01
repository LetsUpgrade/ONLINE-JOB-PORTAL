from django.shortcuts import render, redirect

# Create your views here.
from django.http import HttpResponse


def home(request):
    return HttpResponse("home page of recruiter")
