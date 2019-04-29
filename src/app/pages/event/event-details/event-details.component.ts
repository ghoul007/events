import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Event } from "../event";
import { EventsService } from "../events.service";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-event-details",
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.scss"]
})
export class EventDetailsComponent implements OnInit {
  event$: any;
  constructor(private route: ActivatedRoute, private eventService: EventsService) {}
  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.event$ =  this.eventService.getEvent(+id).pipe(tap(console.log));
  }
}
