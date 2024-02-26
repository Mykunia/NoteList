from django.db import models

class Note(models.Model):
    title = models.TextField(max_length=30)
    text = models.TextField(max_length=300)
    creation_date = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return f"{self.title} - {self.text}"
    class Meta:
        db_table = 'notes'