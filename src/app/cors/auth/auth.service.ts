import { Injectable } from "@angular/core";
import { User } from "./user";
import { Observable, throwError as observableThrowError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { HttpErrorResponse, HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

/**
 *
 *
 * @export
 * @class AuthService
 */
@Injectable({
  providedIn: "root"
})
export class AuthService {
  private authUrl = "api/auth"; // URL to web api
  constructor(private http: HttpClient, private router: Router) {}

  /**
   *
   *
   * @param {User} user
   * @returns
   * @memberof AuthService
   */
  signup(user: User) {
    const headers = new Headers({
      "Content-Type": "application/json"
    });

    return this.http.post<User>(this.authUrl, user).pipe(
      tap((user: User) => {
        localStorage.setItem("currentUser", JSON.stringify(user));
        console.log(`signup hero w/ `);
      }),

      catchError(this.handleError)
    );
  }

  /**
   *
   *
   * @param {string} login
   * @param {string} password
   * @returns
   * @memberof AuthService
   */
  login(login: string, password: string) {
    return this.http
      .get(this.authUrl + `?login=${login}&password=${password}`)
      .pipe(
        map((res: User | any) => {
          if (res && !res.length) {
            throw new Error("login or password invalid");
          }
          localStorage.setItem("currentUser", JSON.stringify(res));
          return res;
        })
      );
  }

  /**
   *
   *
   * @returns
   * @memberof AuthService
   */
  isLogin() {
    return !!localStorage.getItem("currentUser");
  }

  /**
   *
   *
   * @memberof AuthService
   */
  logout() {
    localStorage.clear();
    this.router.navigate(["auth/login"]);
  }

  /**
   *
   *
   * @private
   * @param {(HttpErrorResponse | any)} res
   * @returns
   * @memberof AuthService
   */
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || "Server error");
  }
}
