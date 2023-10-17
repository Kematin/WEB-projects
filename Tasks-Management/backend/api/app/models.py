from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                             related_name="task_creator")
    task = models.CharField(max_length=150)

    def __str__(self):
        return f"{self.user}: {self.task}"
