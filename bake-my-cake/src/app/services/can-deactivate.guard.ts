import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CakeCartComponent } from '../cake-cart/cake-cart.component';

@Injectable({
  providedIn: 'root'
})

export class CanDeactivateGuard {
  canDeactivate(
    component: CakeCartComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return component.canDeactivate ? component.canDeactivate() : true;
  }
  
}