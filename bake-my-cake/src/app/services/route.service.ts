import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(private router: Router) {}

  navigateToHome() {
    // this.router.navigate(['']);
    this.router.navigate(['home']);
  }

  navigateToCakeRequestsView() {
    this.router.navigate(['cake-requests']);
  }

  navigateToLoginView() {
    this.router.navigate(['login']);
  }
}
