import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class SelectedProductService {

  private selectedProductSubject: BehaviorSubject<Product | undefined> = new BehaviorSubject<Product | undefined>(undefined);

  public setSelectedProduct(product: Product): void {
    this.selectedProductSubject.next(product);
  }

  public getSelectedProduct(): BehaviorSubject<Product | undefined> {
    return this.selectedProductSubject;
  }
}
