from django.db import models

# Create your models here.
class Tasks(models.Model):
    task_1 = models.CharField(max_length=500)
    task_2 = models.CharField(max_length=500)
    task_3 = models.CharField(max_length=500)
