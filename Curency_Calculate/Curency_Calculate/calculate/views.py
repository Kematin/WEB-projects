from django.shortcuts import render

from currency_converter import CurrencyConverter

from .forms import *

# Create your views here.
def error(request, error):
    return render(request, 'calculate_template/error.html')

def index(request):
    return render(request, 'calculate_template/index.html', {
        'form': MainCurrencyForm(),
    })

def convert(currency_1: str, currency_2: str, value: int) -> int:
    pass

if __name__ == '__main__':
    pass
    # c_1 = 'EUR'
    # c_2 = 'RUB'
    # value = 2
    # answer = convert(c_1, c_2, value)
    # print(answer)
