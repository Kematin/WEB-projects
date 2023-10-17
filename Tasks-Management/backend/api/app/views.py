from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.permissions import IsAuthenticated
from .permissions import OwnProfilePermission
from .models import Task
from .serializers import (
    TaskSerializer,
    TasksSerializer
)


class TaskList(ListAPIView):
    serializer_class = TasksSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset = Task.objects.filter(user=user)
        return queryset


class TaskCreate(CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]


class TaskChange(RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated, OwnProfilePermission]
