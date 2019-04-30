import { Component, OnInit } from "@angular/core";
import { LoadingService } from "../loading.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"]
})
export class LoadingComponent implements OnInit {
  loading$: Observable<string>;
  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    // this.loadingService.startLoading()
    this.loading$ = this.loadingService.getLoading() 
    .pipe(map(loadingType => loadingType.valueOf()));
  }


  start(){
    this.loadingService.stopLoading();
  }
}
