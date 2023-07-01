import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { SelectedProductService } from '../selected-product.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  selectedProduct: Product | undefined;

  constructor(private selectedProductService: SelectedProductService) { }

  ngOnInit(): void {
    this.selectedProductService.getSelectedProduct().subscribe(product => {
      this.selectedProduct = product;
    });
  }
}
