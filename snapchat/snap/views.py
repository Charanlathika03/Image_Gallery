from django.shortcuts import render

def index(request):
    return render(request, 'index.html')  # OR 'snap/index.html' if using app templates
