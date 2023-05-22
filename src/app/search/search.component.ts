import { Component } from '@angular/core';
import { Product } from '../product';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { ProductService } from '../product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title = 'product-recommender-angular';
  searchText = '';

  public model: any;
  public products: Product[] = [];
  public search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : ((this.products ?? []).filter((product) => product.productName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)).map((product) => product.productName)
      )
    );

  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
