from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import UserRequeste
from .serializers import UserRequesteSerializer
from django.template import loader
# Create your views here.

def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render())


def user_requeste(request):
    template = loader.get_template('user_form_requeste.html')
    return HttpResponse(template.render())

def requeste_list(request):
    user_req = UserRequeste.objects.all()
    template = loader.get_template('requeste-list.html')
    return render(request, 'requeste-list.html', {'requeste': user_req})
    return HttpResponse(template.render())



class UserRequesteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = UserRequeste.objects.all()
    serializer_class = UserRequesteSerializer
    # permission_classes = [permissions.IsAuthenticated]
