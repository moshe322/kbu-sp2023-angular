import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'sortByPriceChange'
})
export class SortByPriceChangePipe implements PipeTransform {

  transform(products: Product[]): Product[] {
    return products.sort((a, b) => {
      const priceChangeA = ((a.productPrice - a.productPrice1) / a.productPrice1) * 100;
      const priceChangeB = ((b.productPrice - b.productPrice1) / b.productPrice1) * 100;
      return priceChangeA - priceChangeB; // Sort in descending order
    }).slice(0, 5);
  }

}
