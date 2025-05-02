from django.http  import HttpResponse
from django.shortcuts import render


def home(request):
    # return HttpResponse("Hello, world. You're at the chaiaurDjango home page.")
    return render(request , 'website/index.html')

def about(request):
    return HttpResponse("Hello, world. You're at the chaiaurDjango about page.")

def contact(request) : 
    return HttpResponse("Hello , world . You are at the chaiaurDjango contact page.")