import { Component } from '@angular/core';
import { Product } from '../product';
import { ResultService } from '../result.service';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  selectedCategory: string = 'cheapest';
  recommendedProducts: Product [] = [];
  recommendedProductsByUnit: Product [] = [];
  recommendedProductsByRating: Product [] = [];

  constructor(private dropdownService: DropdownService, private resultService: ResultService) { }

  ngOnInit() {
    this.resultService.recommendedProducts$.subscribe(products => {
      this.recommendedProducts = products;
      // Handle the updated recommendedProducts array in the result component
    });
    this.resultService.recommendedProductsByUnit$.subscribe(products => {
      this.recommendedProductsByUnit = products;
      // Handle the updated recommendedProducts array in the result component
    });
    this.resultService.recommendedProductsByRating$.subscribe(products => {
      this.recommendedProductsByRating = products;
      // Handle the updated recommendedProducts array in the result component
    });
    this.dropdownService.selectedCategory$.subscribe(category => {
      this.selectedCategory = category;
      // Perform any logic or update the results based on the selected category
    });
  }
}
