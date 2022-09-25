import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Note } from './cards/Note';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private cardsUrl = 'api/cards';  // URL to web api
  constructor( private http:HttpClient) { }

  /** GET heroes from the server */
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.cardsUrl).pipe(
      tap(_ => console.log('fetched notes')),
      catchError(this.handleError<Note[]>('getNotes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`$operation failed: ${error.message}`);
      return of(result as T);
    }
  }
  getNoteById(id: number): Observable<Note> {
    const url: string = `${this.cardsUrl}/${id}`;
    return this.http.get<Note>(url).pipe(
      tap(_ => console.log(`fetched note id=${id}`)),
      catchError(this.handleError<Note>(`getNoteById, id=${id}`, ))
    );
  }
  addNote(nota:Note){
    return this.http.post<Note>(this.cardsUrl, nota).pipe(
      tap((newNote: Note) => console.log(`added note w/ id=${newNote.id}`)),
      catchError(this.handleError<Note>('addNote')));
  }
  updateNote(nota: Note): Observable<any> {
    const url: string = `${this.cardsUrl}/${nota.id}`;
    return this.http.put(url, nota).pipe(
      tap(_ => console.log(`updated note id=${nota.id}`)),
      catchError(this.handleError<any>('updateNote'))
    );
  }
  
  genId():Observable<number> {
    return this.getNotes().pipe(
      map((notes: Note[]) => notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 0)
    );
  }

}
