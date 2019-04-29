import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./nav/nav.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from './main/main.component';
import { RouterModule } from "@angular/router";
import { LoadingModule } from "../shared/loading/loading.module";
 

@NgModule({
  imports: [CommonModule, RouterModule, LoadingModule],
  declarations: [NavComponent, HeaderComponent, FooterComponent, MainComponent],
  exports: [NavComponent, HeaderComponent, FooterComponent]
})
export class CorsModule {}
