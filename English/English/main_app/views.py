from django.shortcuts import render
from .forms import TaskForm
from .main import Main

# Create your views here.
def index(request):
    context = {
            "form": TaskForm,
            "templates": []
        }
    if request.method == "POST": 
        form = TaskForm(request.POST)
        if form.is_valid():
            answer_1 = form.cleaned_data["task_1"]
            answer_2 = form.cleaned_data["task_2"]
            answer_3 = form.cleaned_data["task_3"]
            runner = Main()
            templates = runner.main(answer_1, answer_2, answer_3)
            context["templates"] = templates

    return render(request, "index.html", context)

def handler404(request):
    return render(request, "404.html")
