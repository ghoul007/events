import { Component, OnInit } from "@angular/core";
import { EventsService } from "../events.service";
import { tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { LoadingService } from "src/app/shared/loading/loading.service";
import { UsersService } from "src/app/cors/auth/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.scss"]
})
export class EventListComponent implements OnInit {
  tags: any = [];
  selectTag: string;
  eventList: any = [];
  constructor(
    private eventsService: EventsService,
    private http: HttpClient,
    private loadService: LoadingService,
    private userService: UsersService,
    private activeRoute: ActivatedRoute
  ) {
    this.eventList = this.activeRoute.snapshot.data["events"];
  }

  ngOnInit() {
    // this.userService.getUsers().subscribe(console.log);
    this.selectTag = "";
    this.tags = this.eventList
      .map(res => res.tag)
      .filter((ele, i, arr) => {
        return arr.indexOf(ele) === i;
      });
    // this.eventList$ = this.eventsService.getEvents().pipe(
    //   tap(events => {
    //     this.tags = events
    //       .map(res => res.tag)
    //       .filter((ele, i, arr) => {
    //         return arr.indexOf(ele) === i;
    //       });
    //   })
    // );
  }
}
