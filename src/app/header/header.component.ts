import { Component } from '@angular/core';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedCategory: string = 'cheapest';

  constructor(private dropdownService: DropdownService) { }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.dropdownService.setSelectedCategory(category);
  }

  get selectedCategoryDisplayText(): string {
    if (this.selectedCategory === 'cheapest') {
      return 'Fiyata Göre';
    } else if (this.selectedCategory === 'cheapestUnit') {
      return 'Birim Fiyata Göre';
    } else if (this.selectedCategory === 'cheapestRating') {
      return 'Puana Göre';
    } else {
      return '';
    }
  }
}
