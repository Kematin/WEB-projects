from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from .models import Task
from .serializers import (
    TaskSerializer,
    TasksSerializer
)


class TaskList(ListAPIView):
    serializer_class = TasksSerializer

    def get_queryset(self):
        user_id = self.request.data.get('user_id', None)
        if user_id is None:
            return []

        queryset = Task.objects.filter(user=user_id)
        return queryset


class TaskCreate(CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskChange(RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
