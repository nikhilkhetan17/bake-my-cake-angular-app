import { Component } from '@angular/core';
import { CakeRequest } from '../models/cakeRequest';
import { CakeRequestService } from '../services/cake-request.service';

@Component({
  selector: 'app-cake-requests',
  templateUrl: './cake-requests.component.html',
  styleUrls: ['./cake-requests.component.css'],
})
export class CakeRequestsComponent {
  displayedColumns: string[] = [
    'messageOnCake',
    'deliveryDate',
    'email',
    'phone',
    'pincode',
    'address',
    'eggEggles',
    'cakeName',
  ];
  
  cakeRequests: CakeRequest[] = [];

  constructor(private cakeRequestService: CakeRequestService) {}

  ngOnInit(): void {
    this.cakeRequestService.getAllCakeRequests().subscribe({
      next: (data) => {
        this.cakeRequests = data;
      },
      error: (err) => {
        alert(err);
      },
    });
  }

}
