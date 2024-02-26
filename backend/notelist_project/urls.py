from django.urls import include, path
from notelist_app import views

urlpatterns = [
    path('notes/', views.NoteList.as_view(), name='note-list'),# Endpoint do listy notatek
    path('notes/create/', views.NoteCreate.as_view(), name='note-create'),    # Endpoint do tworzenia notatki
    path('notes/<int:pk>/update/', views.NoteUpdate.as_view(), name='note-update'),    # Endpoint do aktualizacji notatki
    path('notes/<int:pk>/delete/', views.NoteDelete.as_view(), name='note-delete'),    # Endpoint do usuwania notatki
]
