import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventRoutingModule } from './event-routing.module';
import { EventCardComponent } from './event-card/event-card.component';
import { FilterModule } from 'src/app/shared/filter/filter.module';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    FilterModule
  ],
  declarations: [EventListComponent, EventEditComponent, EventCardComponent, EventDetailsComponent],
  exports: [EventListComponent, EventEditComponent]
})
export class EventModule { }
