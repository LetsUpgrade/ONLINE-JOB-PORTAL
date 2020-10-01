from django.db import models


# Create your models here.
class recruiter(models.Model):
    company_name = models.CharField(max_length=122)
    usernname = models.CharField(max_length=122)
    location = models.CharField(max_length=122)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=50)
    Industry = models.CharField(max_length=50, default="")
    website = models.URLField(default=" ")
    linkedin = models.URLField(default=" ")
    no_emp = models.IntegerField()

    def __str__(self):
        return self.company_name

class seeker(models.Model):
    name = models.CharField(max_length=122)
    usernname = models.CharField(max_length=122)
    location = models.CharField(max_length=122)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=50)
    experience = models.CharField(max_length=15)
    key_skill = models.CharField(max_length=50)
    preferred_industry = models.CharField(max_length=50, default="none")


    def __str__(self):
        return self.name


