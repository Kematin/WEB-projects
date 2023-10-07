from django.urls import path
from .views import (
    TaskList,
    TaskCreate,
    TaskChange
)

urlpatterns = [
    path("tasklist/", view=TaskList.as_view()),
    path("taskcreate/", view=TaskCreate.as_view()),
    path("taskchange/<int:pk>/", view=TaskChange.as_view()),
]
