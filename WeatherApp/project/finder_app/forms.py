from django import forms

class CityForm(forms.Form):
    city_form = forms.CharField(label="City") 
