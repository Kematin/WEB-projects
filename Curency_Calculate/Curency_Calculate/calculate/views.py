from django.shortcuts import render

from .forms import *
from .main import convert

# Create your views here.
def error(request, error):
    return render(request, 'calculate_template/error.html')


def index(request):
    context = {
        'form': MainCurrencyForm(),
        'total': 0,
        'c_1': 'None',
        'c_2': 'None',
    }

    if request.method == 'POST':
        form = MainCurrencyForm(request.POST)
        
        if form.is_valid():
            value = form.cleaned_data['input_value']
            c_1 = form.cleaned_data['select_1'].upper()
            c_2 = form.cleaned_data['select_2'].upper()
            total = convert(c_1, c_2, value)
            context['c_1'], context['c_2'], context['total'] = c_1, c_2, total
            return render(request, 'calculate_template/index.html', context)

    return render(request, 'calculate_template/index.html', context)
