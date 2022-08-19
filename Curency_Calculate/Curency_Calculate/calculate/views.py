from django.shortcuts import render

from .forms import *

# Create your views here.
def index(request):
    return render(request, 'calculate_template/index.html', {
        'input_value_form': InputValueForm(),
        'currency_select': SelectCurrency(),
    })
