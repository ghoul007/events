import { Component, OnInit } from "@angular/core";
import { EventsService } from "../events.service";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.scss"]
})
export class EventListComponent implements OnInit {
  eventList$: any;
  tags: any = [];
  selectTag: string;
  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.selectTag = ""
    this.eventList$ = this.eventsService.getEvents().pipe(
      tap(events => {
        this.tags = events
          .map(res => res.tag)
          .filter((ele, i, arr) => {
            return arr.indexOf(ele) === i;
          });
      })
    );
  }
}
