import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventesUrl = 'api/events'; // URL to web api

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http
      .get<Event[]>(this.eventesUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getEvent(id: number): Observable<Event> {
    return this.getEvents().pipe(
      map(eventes => eventes.find(event => event.id === id))
    );
  }

  save(event: Event) {
    if (event.id) {
      return this.put(event);
    }
    return this.post(event);
  }

  delete(event: Event) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.eventesUrl}/${event.id}`;

    return this.http.delete<Event>(url).pipe(catchError(this.handleError));
  }

  // Add new Event
  private post(event: Event) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Event>(this.eventesUrl, event)
      .pipe(catchError(this.handleError));
  }

  // Update existing Event
  private put(event: Event) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.eventesUrl}/${event.id}`;

    return this.http.put<Event>(url, event).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | Event) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}