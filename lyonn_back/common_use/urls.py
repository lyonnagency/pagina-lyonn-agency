from django.contrib import admin
from django.urls import path
from django.urls import include
from . import views
from rest_framework import routers

# router = routers.DefaultRouter()
# router.register(r"correo", views.ContactView)
urlpatterns = [
    # we have to set the APIview as a sinple view
    path('forms/', views.ContactView.as_view()),
    # path('token/', views.get_csrf_token)
    # path("", include(router.urls)),
]
