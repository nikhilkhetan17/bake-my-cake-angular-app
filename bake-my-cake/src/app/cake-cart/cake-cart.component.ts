import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cake } from '../models/cake';
import { CakeRequest } from '../models/cakeRequest';
import { RouteService } from '../services/route.service';
import { CakeRequestService } from '../services/cake-request.service';
import { CakeService } from '../services/cake.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { formatDate } from '@angular/common';

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
  ) {
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

  editStatus: boolean = true;

  canDeactivate() {
    if(!this.editStatus) {
      let response = confirm("Changes are not saved. Do you still want to leave");
      return response;
    } else {
      return true;
    }
    
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      let id = param.get('id') ?? '';
      this.cakeService.getCake(+id).subscribe((data) => {
        this.cake = data;
        this.editStatus = false;
      });
    });
  }

  makeRequest(orderRequestForm: any) {
    console.log(orderRequestForm.value);
    this.cakeRequest.cakeName = this.cake?.name;
    const deliveryDate =
      this.cakeRequest.deliveryDate instanceof Date
        ? this.cakeRequest.deliveryDate
        : new Date(); // check this line with "" at end
    const formattedDate = formatDate(deliveryDate, 'dd-MM-yyyy', 'en-US');
    this.cakeRequest.deliveryDate = formattedDate;
    this.cakeRequestService.saveCakeRequest(this.cakeRequest).subscribe({
      next: (data) => {
        this.snackBar.open('Order Submitted', 'success', {
          duration: 3000,
        });
        this.editStatus = true;
        this.routeService.navigateToHome();
        // orderRequestForm.reserForm();
      },
      error: err => {
        alert("Failed to submit cake request");
      }
    });
  }
}
