import { Component } from '@angular/core';
import { Product } from '../product';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  recommendedProducts: Product [] = [];
  recommendedProductsByUnit: Product [] = [];

  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this.resultService.recommendedProducts$.subscribe(products => {
      this.recommendedProducts = products;
      // Handle the updated recommendedProducts array in the result component
    });
    this.resultService.recommendedProductsByUnit$.subscribe(products => {
      this.recommendedProductsByUnit = products;
      // Handle the updated recommendedProducts array in the result component
    });
  }
}
