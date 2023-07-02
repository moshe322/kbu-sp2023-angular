import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ResultService } from '../result.service';
import { PriceChangeDirective } from '../price-change.directive';

@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.css']
})
export class SuggestedComponent {
  suggestedProducts: Product [] = [];
  
  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.resultService.suggestedProducts$.subscribe(products => {
      this.suggestedProducts = products;
      // Handle the updated recommendedProducts array in the result component
    });
  }
}
