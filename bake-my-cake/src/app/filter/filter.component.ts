import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  filterCategory: string = "all"

  @Output()
  filteredCategory: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void{
    this.filteredCategory.emit(this.filterCategory);
  }

  Onfilter() {
    if(!this.filterCategory) {
      this.filterCategory = "all";
    } else {
      this.filteredCategory.emit(this.filterCategory)
    }
  }
}
