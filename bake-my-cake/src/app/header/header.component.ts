import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  loggedIn: boolean = true;

  constructor(private authService: AuthService, private routerService: RouteService) { }
  logout() {
    this.authService.logout();
    this.routerService.navigateToLoginView();
  }
}
