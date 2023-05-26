import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[]): any[] {
    return products.sort((a, b) => a.productPrice - b.productPrice);
  }

}
