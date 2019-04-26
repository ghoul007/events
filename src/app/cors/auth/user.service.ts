import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private useresUrl = "api/users"; // URL to web api
  loggendIn: boolean;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any[]>(this.useresUrl).pipe(
      map(data => data),
      catchError(this.handleError)
    );
  }

  getUser(id: number): Observable<any> {
    return this.getUsers().pipe(
      map(useres => useres.find(user => user.id === id))
    );
  }

  save(user: User) {
    if (user.id) {
      return this.put(user);
    }
    return this.post(user);
  }

  delete(user: User) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const url = `${this.useresUrl}/${user.id}`;

    return this.http.delete<User>(url).pipe(catchError(this.handleError));
  }



  // Add new User
  // Add new User
  private post(user: User) {
    const headers = new Headers({
      "Content-Type": "application/json"
    });

    return this.http.post<User>(this.useresUrl, user).pipe(
      tap((user: User) => {
        console.log(`signup hero w/ `);
      }),

      catchError(this.handleError)
    );
  }

  // Update existing User
  private put(user: User) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const url = `${this.useresUrl}/${user.id}`;

    return this.http.put<User>(url, user).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || "Server error");
  }
}
