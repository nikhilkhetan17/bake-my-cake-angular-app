import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  filterByCategory: string = "all"

  @Output()
  filteredCategory: EventEmitter<string> = new EventEmitter<string>();

  // ngOnInit(): void{
  //   this.filteredCategory.emit(this.filterByCategory);
  // }

  Onfilter() {
    if(!this.filterByCategory) {
      this.filterByCategory = "all";
    } else {
      this.filteredCategory.emit(this.filterByCategory)
    }
  }
}
