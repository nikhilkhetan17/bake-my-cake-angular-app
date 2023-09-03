import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cake } from '../models/cake';
import { CakeRequest } from '../models/cakeRequest';
import { RouteService } from '../services/route.service';
import { CakeRequestService } from '../services/cake-request.service';
import { CakeService } from '../services/cake.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cake-cart',
  templateUrl: './cake-cart.component.html',
  styleUrls: ['./cake-cart.component.css'],
})
export class CakeCartComponent {
  cake?: Cake;
  cakeRequest: CakeRequest = {};

  minDate: Date = new Date();

  constructor(
    private activatedRoute: ActivatedRoute,
    private cakeService: CakeService,
    private cakeRequestService: CakeRequestService,
    private routeService: RouteService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit():void {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get("id") ?? "";
      this.cakeService.getCake(+id).subscribe(data => {
        this.cake = data;
      })
    })
  }

  makeRequest() {
    this.cakeRequest.cakeName = this.cake?.name;
    this.cakeRequestService.saveCakeRequest(this.cakeRequest).subscribe({
      next: (data) => {
        this.snackBar.open('Order Submitted', 'success', {
          duration: 3000,
        });
        this.routeService.navigateToHome()
      },
    });
  }
}
