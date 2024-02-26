from django.shortcuts import render
from rest_framework import generics
from .models import Note
from notelist_project.serializers import NoteSerializer
from datetime import datetime, timezone

class NoteList(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def get_queryset(self):
        return Note.objects.all().order_by('-creation_date')

class NoteUpdate(generics.UpdateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def perform_update(self, serializer):
        serializer.save(creation_date=datetime.now(timezone.utc))

class NoteCreate(generics.CreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NoteDelete(generics.DestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
