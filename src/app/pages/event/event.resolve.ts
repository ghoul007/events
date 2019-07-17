import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { EventsService } from "./events.service";

@Injectable({ providedIn: "root" })
export class EventResolve implements Resolve<any> {
  constructor(private eventService: EventsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventService.getEvents();
  }
}
