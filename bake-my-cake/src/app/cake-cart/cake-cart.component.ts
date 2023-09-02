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

  constructor(
    private activatedRoute: ActivatedRoute,
    private cakeService: CakeService,
    private cakeRequestService: CakeRequestService,
    private routeService: RouteService,
    private snackBar: MatSnackBar
  ) {}

  





}
