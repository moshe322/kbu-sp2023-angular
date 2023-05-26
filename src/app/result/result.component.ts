import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() recommendedProducts: Product[] = [];
}
