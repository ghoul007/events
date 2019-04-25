import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./error/not-found/not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "", loadChildren: "./home/home.module#HomeModule" },
  { path: "home", loadChildren: "./pages/pages.module#PagesModule" },
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
