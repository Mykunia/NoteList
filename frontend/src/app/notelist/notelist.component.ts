import { Component, OnInit } from '@angular/core';
import { NoteList } from '../models/note-list';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})

export class NotelistComponent implements OnInit {
  notes!: NoteList[];
  newNote: any = {};
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 0;
  pagesArray: number[] = [];
  url: string = "http://127.0.0.1:8000/notes/";

  constructor(private http: HttpClient) {}

  getNote() {
    this.http
      .get<NoteList[]>(this.url)
      .subscribe((api) => {
        this.notes = api;
        this.totalPages = Math.ceil(this.notes.length / this.itemsPerPage); // Oblicz całkowitą liczbę stron
        console.table(this.notes);
      });
  }

  deleteNotes(id: number) {
    this.http
      .delete(this.url + `${id}/delete/`)
      .subscribe(() => {
        this.notes = this.notes.filter(note => note.id !== id);
        console.log("Note deleted successfully");
      }, error => {
        console.error("Error deleting note:", error);
      });
  }

  addNote() {
    if (this.newNote.title && this.newNote.text && this.newNote.title.length >= 3 && this.newNote.title.length <= 50 && this.newNote.text.length >= 10 && this.newNote.text.length <= 500) {
      this.http
        .post<any>(this.url+"create/", this.newNote)
        .subscribe((response) => {
          console.log(response);
          this.getNote();
          this.newNote = {};
        });
    } else {
      console.error("Note validation failed");
    }
  }

  getPaginatedNotes() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.notes.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  ngOnInit(): void {
    this.getNote();
  }
}
