from django.shortcuts import render

from currency_converter import CurrencyConverter

from .forms import *

# Create your views here.
def error(request, error):
    return render(request, 'calculate_template/error.html')

def index(request):
    if request.method == 'POST':
        form = MainCurrencyForm(request.POST)
        
        if form.is_valid():
            value = form.cleaned_data['input_value']
            c_1 = form.cleaned_data['select_1']
            c_2 = form.cleaned_data['select_2']
            total = convert(c_1, c_2, value)
            return render(request, 'calculate_template/index.html', {
                'form': MainCurrencyForm(),
                'total': total,
            })

    return render(request, 'calculate_template/index.html', {
        'form': MainCurrencyForm(),
        'total': 0,
    })

def convert(currency_1: str, currency_2: str, value: int) -> int:
    return 2

if __name__ == '__main__':
    pass
    # c_1 = 'EUR'
    # c_2 = 'RUB'
    # value = 2
    # answer = convert(c_1, c_2, value)
    # print(answer)
