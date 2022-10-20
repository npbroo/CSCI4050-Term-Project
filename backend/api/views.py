from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer
from .models import User
#for more info on django rest framework: (https://www.youtube.com/watch?v=TmsD8QExZ84)

# Create your views here:

@api_view(['GET'])
def apiOverview(request):
    return JsonResponse("API BASE POINT", safe=False)

@api_view(['GET'])
def userList(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getUser(request, pk):
    user = User.objects.get(user_id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def userCreate(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def userUpdate(request, pk):
    user = User.objects.get(user_id=pk)
    serializer = UserSerializer(instance=user, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def userDelete(request, pk):
    user = User.objects.get(user_id=pk)
    user.delete()
    return Response(f'User id {pk} deleted.')