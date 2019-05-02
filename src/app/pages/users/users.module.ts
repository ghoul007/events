import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInscriptionComponent } from './user-inscription/user-inscription.component';
import { UserRoutingModule } from './user.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UserInscriptionComponent]
})
export class UsersModule { }
