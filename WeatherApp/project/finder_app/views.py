from django.shortcuts import render

from .main import return_data
from .forms import *

# Create your views here.
def index(request):
    if 'city' not in request.session:
        request.session['city'] = 'None'

    context = {
        't': 'None',
        'weather': 'None',
        'city': request.session['city'],
        'city_form': CityForm(),
    }

    if request.method == 'POST':
        form = CityForm(request.POST)
        
        if form.is_valid():
            request.session['city'] = form.cleaned_data['city_form']
            t, weather = return_data(request.session['city'])
            context['t'], context['weather'], context['city'] = t, weather, request.session['city']
        
        return render(request, 'finder_app/index.html', context)

    return render(request, 'finder_app/index.html', context)

