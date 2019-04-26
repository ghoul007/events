import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./error/not-found/not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "default", pathMatch: "full" },
  { path: "auth", loadChildren: "./home/home.module#HomeModule"   },
  { path: "default", loadChildren: "./pages/pages.module#PagesModule"  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
