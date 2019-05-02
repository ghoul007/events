import { Component, OnInit } from "@angular/core";
import { EventsService } from "../events.service";
import { tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { LoadingService } from "src/app/shared/loading/loading.service";
import { UsersService } from "src/app/cors/auth/user.service";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.scss"]
})
export class EventListComponent implements OnInit {
  eventList$: any;
  tags: any = [];
  selectTag: string;
  constructor(
    private eventsService: EventsService,
    private http: HttpClient,
    private loadService: LoadingService,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(console.log);

    this.selectTag = "";
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
