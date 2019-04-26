import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { AuthGuard } from "../cors/auth/auth.guard";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: HomeComponent },
      { path: "event", loadChildren: "./event/event.module#EventModule" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
