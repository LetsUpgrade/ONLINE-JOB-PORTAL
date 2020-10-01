
from django.forms import ModelForm ,CheckboxInput, CheckboxSelectMultiple
from django_countries.widgets import CountrySelectWidget
from recruiter.models import Job 
  
class PostJobForm(ModelForm):  
    class Meta:  
        model = Job  
        exclude = ['recruiter_name', 'created_on']  
        # widgets = {'country': CountrySelectWidget()}