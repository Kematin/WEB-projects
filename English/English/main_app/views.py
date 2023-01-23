from django.shortcuts import render
from .forms import TaskForm
from .main import Main

# Create your views here.
def index(request):
    context = {
            "form": TaskForm,
            "templates": []
        }
    runner = Main()
    templates = runner.main(1, 2, 3)
    context["templates"] = templates

    return render(request, "index.html", context)

def handler404(request):
    return render(request, "404.html")
