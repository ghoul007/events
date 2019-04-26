import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: ['']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
