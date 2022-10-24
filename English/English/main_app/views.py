from django.shortcuts import render

# Create your views here.
def index(request):
    if request.method == "POST":
        pass
    return render(request, "index.html")

def handler404(request):
    return render(request, "404.html")
