import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  private selectedCategorySource = new BehaviorSubject<string>('cheapest');
  selectedCategory$ = this.selectedCategorySource.asObservable();

  constructor() { }

  setSelectedCategory(category: string): void {
    this.selectedCategorySource.next(category);
  }
}
