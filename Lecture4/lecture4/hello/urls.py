from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("santiago", views.santiago, name="santiago"),
    path("<str:name>", views.greet, name="greet")
]