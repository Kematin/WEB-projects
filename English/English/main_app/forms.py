from django import forms
from .models import Tasks

class TaskForm(forms.ModelForm):
    class Meta:
        model = Tasks
        fields = ("task_1", "task_2", "task_3")

        widgets = {
                "task_1": forms.TextInput(
                    attrs={"class": "form-control", "style": "margin-bottom: 20px; text-align: center"}),
                "task_2": forms.TextInput(
                    attrs={"class": "form-control", "style": "margin-bottom: 20px; text-align: center"}),
                "task_3": forms.TextInput(
                    attrs={"class": "form-control", "style": "margin-bottom: 20px; text-align: center"}),
        }
