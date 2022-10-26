from django.db import models

# Create your models here.
class Tasks(models.Model):
    q1 = models.CharField(max_length=50)
    q2 = models.CharField(max_length=50)
    q3 = models.CharField(max_length=50)
