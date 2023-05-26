import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByUnitPrice'
})
export class SortByUnitPricePipe implements PipeTransform {

  transform(products: any[]): any[] {
    return products.sort((a, b) => a.productPrice/a.unitNumber - b.productPrice/b.unitNumber);
  }

}
