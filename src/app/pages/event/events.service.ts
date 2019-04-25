import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventesUrl = 'api/events'; // URL to web api

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http
      .get<any[]>(this.eventesUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getEvent(id: number): Observable<any> {
    return this.getEvents().pipe(
      map(eventes => eventes.find(event => event.id === id))
    );
  }

  save(event: any) {
    if (event.id) {
      return this.put(event);
    }
    return this.post(event);
  }

  delete(event: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.eventesUrl}/${event.id}`;

    return this.http.delete<any>(url).pipe(catchError(this.handleError));
  }

  // Add new Event
  private post(event: any) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<any>(this.eventesUrl, event)
      .pipe(catchError(this.handleError));
  }

  // Update existing Event
  private put(event: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.eventesUrl}/${event.id}`;

    return this.http.put<any>(url, event).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}