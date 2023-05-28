import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByRating'
})
export class SortByRatingPipe implements PipeTransform {

  transform(products: any[]): any[] {
    return products.sort((a, b) => b.rating - a.rating);
  }

}
