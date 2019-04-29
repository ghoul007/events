import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Loading } from "./loading";
import { startWith } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LoadingService {
  loadingSubject: Subject<Loading> = new Subject<Loading>();
  constructor() {}

  getLoading() {
    return this.loadingSubject.asObservable()
    .pipe(startWith(Loading.STOPPED));
  }

  startLoading() {
    this.loadingSubject.next(Loading.LOADING);
  }

  stopLoading() {
    this.loadingSubject.next(Loading.STOPPED);
  }
}
