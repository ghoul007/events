import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CorsModule } from '../cors/cors.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    CorsModule,
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
