from django.db import models
from autoslug import AutoSlugField
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse # new
# from cities.models import BaseCountry

# Create your models here.
class Job(models.Model):
    STATUS = (
        (0,"Open"),
        (1,"Closed")
    )
    JOB_TYPES = (
        ('Part Time', "Part Time"),
        ('Full Time', "Full Time"),
        ('Remote Work', "Remote Work")
    )
    job_title = models.CharField(max_length=60)
    slug = AutoSlugField(populate_from='job_title')
    company_name =  models.CharField(max_length=256, default='')
    description = models.TextField(default='',blank=True)
    job_type =  models.CharField(choices=JOB_TYPES,max_length=60)
    created_on = models.DateTimeField(default=timezone.now, blank=True, null=True)
    location = models.CharField(max_length=256,blank=True)
    # country = CountryField(blank_label='Select country')
    status = models.IntegerField(choices=STATUS, default=0)
    vacany =  models.IntegerField(default=1)
    recruiter_name = models.ForeignKey(User, on_delete=models.CASCADE, related_name = 'recruiter_name')
    email = models.EmailField(max_length=254)
    phone_number = models.CharField(max_length=50) 

    def __str__(self):
        return self.job_title

    # def get_absolute_url(self): # new
    #     return reverse('job_detail', args=[str(self.id)])
    
    def get_absolute_url(self): # new
        return reverse('job_details', args=[str(self.id)])

    class Meta:
        ordering = ["-created_on"]
        verbose_name_plural = "Jobs"


  