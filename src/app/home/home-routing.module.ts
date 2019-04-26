import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthGuard } from "../cors/auth/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch:"full" },
  { path: "", component: HomeComponent , canActivate:[AuthGuard] },
  { path: "login", component: LoginComponent},
  { path: "signup", component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
