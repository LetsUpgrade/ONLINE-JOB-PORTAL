from django.shortcuts import render
from .models import Job
from django.template import loader
# from django.http import HttpResponse
from django.forms import modelformset_factory
from .forms import PostJobForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views.generic.edit import UpdateView
from django.contrib.auth.mixins import LoginRequiredMixin # new
# Create your views here.

# Create your views here.
# def index(request):
#     return render(request, "hire_home.html")

@login_required
def index(request):
    form = PostJobForm()

    if request.method == 'POST':
        print(request.POST)
        form = PostJobForm(request.POST)
        if form.is_valid():
            obj = form.save(commit=False)
            obj.recruiter_name = request.user
            obj.save()

            messages.success(request, 'Your job posted successfully!')
        else:
            messages.warning(request, 'Please correct the error below.')
    context = {'form' : form}
    return render(request, 'index.html', context)

@login_required
def display(request):
    jobs = Job.objects.all()
    return render(request, 'display.html', {
        'jobs' : jobs
    })

@login_required
def dashboard(request):
    jobs = Job.objects.filter(recruiter_name=request.user)
    
    return render(request, 'hire_dashboard.html', {
        'jobs' : jobs,
        'open' : Job.objects.filter(recruiter_name=request.user,status=0 ).count(),
        'closed' : Job.objects.filter(recruiter_name=request.user, status=1).count(),
    })

@login_required
def job_details(request, job_id):
    jobs = Job.objects.get(pk=job_id)
    return render(request, 'job_details.html',{
        'jobs' : jobs,
        })  

class JobUpdate(LoginRequiredMixin,UpdateView):
    model = Job
    template_name = 'job_edit.html'
    fields = ['job_title','company_name','description','job_type','location','status','vacany','email','phone_number']
    
    def dispatch(self, request, *args, **kwargs): # new
        obj = self.get_object()
        if obj.recruiter_name != self.request.user:
            raise PermissionDenied
        return super().dispatch(request, *args, **kwargs)