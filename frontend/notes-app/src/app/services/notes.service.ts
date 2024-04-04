import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/Note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private baseUrl: string = 'http://localhost:8080/notes/';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.baseUrl + 'getAllNotes');
  }

  deleteNote(id: number): Observable<Note> {
    return this.http.delete<Note>(`${this.baseUrl}deleteNote?id=${id}`);
  }

  updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.baseUrl}updateNote?id=${note.id}`, note);
  }

  getNote(id: number) {
    return this.http.get<Note>(`${this.baseUrl}getNoteById?id=${id}`);
  }

  archiveOrUnarchiveNote(id: number): Observable<Note> {
    return this.http.put<Note>(`${this.baseUrl}archiveNote?id=${id}`, null);
  }

  saveNote(note: Note): Observable<Note> {
    return this.http.post<Note>(`${this.baseUrl}saveNote`, note);
  }

  getArchivedNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.baseUrl}listNotes?archived=true`);
  }

  getUnarchivedNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.baseUrl}listNotes?archived=false`);
  }

  getNotesByCategory(category: string): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.baseUrl}getNotesByCategory?category=${category}`);
  }
}
