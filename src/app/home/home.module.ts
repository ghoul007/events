import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CorsModule } from '../cors/cors.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MessageErrorModule } from '../shared/message-error/message-error.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CorsModule,
    FormsModule,
    ReactiveFormsModule,
    MessageErrorModule
  ],
  declarations: [HomeComponent, LoginComponent, SignupComponent],
  exports: [HomeComponent, LoginComponent, SignupComponent]
})
export class HomeModule { }
