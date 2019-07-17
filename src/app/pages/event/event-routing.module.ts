import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventListComponent } from "./event-list/event-list.component";
import { EventEditComponent } from "./event-edit/event-edit.component";
import { AuthGuard } from "src/app/cors/auth/auth.guard";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { EventResolve } from "./event.resolve";

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  {
    path: "list",
    component: EventListComponent,
    resolve: { events: EventResolve }
  },
  { path: ":id", component: EventDetailsComponent },
  { path: "edit", component: EventEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {}
