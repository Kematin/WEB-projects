from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                             related_name="task_creator")
    task = models.CharField(max_length=150)