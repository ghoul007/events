import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInscriptionComponent } from './user-inscription/inscription/user-inscription.component';
import { UserRoutingModule } from './user.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './user-inscription/signin/signin.component';
import { InscriptionPageComponent } from './user-inscription/inscription-page.component';
import { MessageErrorModule } from 'src/app/shared/message-error/message-error.module';
import { NameCheckModule } from 'src/app/shared/directives/name-check.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MessageErrorModule,
    NameCheckModule
  ],
  declarations: [UserInscriptionComponent, SigninComponent, InscriptionPageComponent]
})
export class UsersModule { }
