import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/Note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}
  getNotes(): Observable<Note[]> {
    const url = 'http://localhost:8080/notes/getAllNotes';
    return this.http.get<Note[]>(url);
  }

  deleteNote(id: number): Observable<Note> {
    const url = 'http://localhost:8080/notes/deleteNote?id=' + id;
    return this.http.delete<Note>(url);
  }

  updateNote(note: Note): Observable<Note> {
    const url = 'http://localhost:8080/notes/updateNote?id=' + note.id;
    return this.http.put<Note>(url, note);
  }

  getNote(id: number) {
    const url = 'http://localhost:8080/notes/getNoteById?id=' + id;
    return this.http.get<Note>(url);
  }

  archiveOrUnarchiveNote(id: number): Observable<Note> {
    const url = 'http://localhost:8080/notes/archiveNote?id=' + id;
    return this.http.put<Note>(url, null);
  }

  saveNote(note: Note): Observable<Note> {
    const url = 'http://localhost:8080/notes/saveNote';
    return this.http.post<Note>(url, note);
  }

  getArchivedNotes(): Observable<Note[]> {
    const url = 'http://localhost:8080/notes/listNotes?archived=true';
    return this.http.get<Note[]>(url);
  }

  getUnarchivedNotes(): Observable<Note[]> {
    const url = 'http://localhost:8080/notes/listNotes?archived=false';
    return this.http.get<Note[]>(url);
  }

  getNotesByCategory(category: string): Observable<Note[]> {
    const url = 'http://localhost:8080/notes/getNotesByCategory?category=' + category;
    return this.http.get<Note[]>(url);
  }
}