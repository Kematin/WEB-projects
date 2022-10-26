from django.shortcuts import render

# Create your views here.
def index(request):
    if request.method == "POST":
        answer_1 = request.POST["q1"]
        print(answer_1)
    return render(request, "index.html")

def handler404(request):
    return render(request, "404.html")
