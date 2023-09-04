import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { CakeRequestsComponent } from './cake-requests/cake-requests.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeViewComponent,
  },
  {
    path: "order-view/:id",
    component: CakeCartComponent,
  },
  {
    path: "cake-requests",
    component: CakeRequestsComponent,
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
