import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private recommendedProductsSource = new BehaviorSubject<Product[]>([]);
  private recommendedProductsByUnitSource = new BehaviorSubject<Product[]>([]);
  private recommendedProductsByRatingSource = new BehaviorSubject<Product[]>([]);
  recommendedProducts$ = this.recommendedProductsSource.asObservable();
  recommendedProductsByUnit$ = this.recommendedProductsByUnitSource.asObservable();
  recommendedProductsByRating$ = this.recommendedProductsByRatingSource.asObservable();

  constructor() { }

  updateRecommendedProducts(products: Product[]) {
    this.recommendedProductsSource.next(products);
  }

  updateRecommendedProductsByUnit(products: Product[]) {
    this.recommendedProductsByUnitSource.next(products);
  }

  updateRecommendedProductsByRating(products: Product[]) {
    this.recommendedProductsByRatingSource.next(products);
  }
}
