import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./nav/nav.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavComponent, HeaderComponent, FooterComponent, MainComponent],
  exports: [NavComponent, HeaderComponent, FooterComponent]
})
export class CorsModule {}
