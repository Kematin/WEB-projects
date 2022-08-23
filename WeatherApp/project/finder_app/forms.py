from django import forms
from django.core.validators import RegexValidator

class CityForm(forms.Form):
    city_form = forms.CharField(label='', strip=True, min_length=2,
            widget=forms.TextInput(attrs={'placeholder': 'Input city'}))
