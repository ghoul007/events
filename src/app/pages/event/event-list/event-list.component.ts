import { Component, OnInit } from "@angular/core";
import { EventsService } from "../events.service";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.scss"]
})
export class EventListComponent implements OnInit {
  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService.getEvents().subscribe(res => console.log(res));
  }
}
