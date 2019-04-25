import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventRoutingModule } from './event-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule
  ],
  declarations: [EventListComponent, EventEditComponent],
  exports: [EventListComponent, EventEditComponent]
})
export class EventModule { }
