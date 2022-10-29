from django.shortcuts import render
from .forms import TaskForm

# Create your views here.
def index(request):
    context = {
            "form": TaskForm
        }
    if request.method == "POST": 
        form = TaskForm(request.POST)
        if form.is_valid():
            answer_1 = form.cleaned_data["task_1"]
            answer_2 = form.cleaned_data["task_2"]
            answer_3 = form.cleaned_data["task_3"]

    return render(request, "index.html", context)

def handler404(request):
    return render(request, "404.html")
