from django import forms
from .models import Tasks

class TaskForm(forms.ModelForm):
    class Meta:
        model = Tasks
        fields = ("q1", "q2", "q3")

        widget = {
            "q1": forms.TextInput(attrs={}),
            "q2": forms.TextInput(attrs={}),
            "q3": forms.TextInput(attrs={}),
        }
