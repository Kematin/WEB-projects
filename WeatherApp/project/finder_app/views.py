from django.shortcuts import render

from .main import return_data
from .forms import *

all_info = list()
# Create your views here.
def index(request):
    request.session['info'] = get_data(request)
    
    context = {
        'info': request.session['info'],
        'city_form': CityForm(),
    }

    return render(request, 'finder_app/index.html', context)


# Getting weather information,
# dictionary conversion
def get_data(request):
    info = dict()
    if request.method == 'POST':
        form = CityForm(request.POST)
        
        if form.is_valid():
            city = form.cleaned_data['city_form']
            t, weather = return_data(city)
            info['t'], info['icon'], info['city'] = t, weather, city
    
        return info
