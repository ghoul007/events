import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CorsModule } from '../cors/cors.module';
import { EventsService } from './event/events.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    CorsModule,
    HttpClientModule
  ],
  declarations: [PagesComponent],
})
export class PagesModule { }
