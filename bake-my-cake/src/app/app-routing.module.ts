import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { CakeRequestsComponent } from './cake-requests/cake-requests.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { CanDeactivateGuard } from './services/can-deactivate.guard';
import { OrderSuccessComponent } from './order-success/order-success.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeViewComponent,
  },
  {
    path: "order-view/:id",
    component: CakeCartComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: "cake-requests",
    component: CakeRequestsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "order-success",
    component: OrderSuccessComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
