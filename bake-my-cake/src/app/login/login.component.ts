import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private authService: AuthService, private routeService: RouteService) { }
  cakeRequestCode: string = "";

  validateCakeRequestCode() {
    this.authService.login(this.cakeRequestCode);
    if(this.authService.isLoggedIn) {
      this.routeService.navigateToCakeRequestsView();
    }
  }

  ngOnInit(): void {
  }

}