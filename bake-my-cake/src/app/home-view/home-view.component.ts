import { Component, OnInit } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
})
export class HomeViewComponent {
  cakes: Cake[] = [];
  filterCat: string = "";

  constructor(private cakeService: CakeService) {}

  ngOnInit(): void {
    this.cakeService.getCakes().subscribe({
      next: (data) => {
        this.cakes = data;
      },
      error: (error) => {
        alert('Failed to fetch Cakes due to Server Error !!');
      },
    });
  }

  onSearchTextChanged(cakeName: string) {
    this.cakeService.getCakes().subscribe({
      next: (data) => {
        if (cakeName || cakeName !== '') {
          this.cakes = this.cakes.filter((cake) =>
            cake.name?.toLowerCase().startsWith(cakeName.toLowerCase())
          );
        } else {
          this.cakes = data;
        }
      },
    });
  }
  onFilter(filter: string) {
    this.filterCat = filter;
    this.cakeService.getCakes().subscribe({
      next: data => {
        this.cakes = data.filter(cake => cake.category === this.filterCat)
        if(this.filterCat === "all") {
          this.cakes = data;
        }
      }
    })
  }
}
