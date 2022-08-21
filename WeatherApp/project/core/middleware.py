from django.shortcuts import render

class ExceptionError:
    def __init__(self, get_response):
        self._get_response = get_response

    def __call__(self, request):
        response = self._get_response(request)
        return response
    
    def process_exception(self, request, exception):
        return render(request, 'error/index.html', {'exception': exception})
