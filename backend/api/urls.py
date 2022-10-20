from django.urls import path
from . import views

urlpatterns = [
    # API BASE POINT: '/api/'
    path('', views.apiOverview, name="api-overview"),

    # API User Methods: '/api/*'
    path('user-list/', views.userList, name="user-list"),
    path('user-get/<str:pk>/', views.getUser, name="get-user"),
    path('user-create/', views.userCreate, name="user-create"),
    path('user-update/<str:pk>/', views.userUpdate, name="user-update"),
    path('user-delete/<str:pk>/', views.userDelete, name="user-delete"),
]