import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product: Product | undefined;

  getMarketLogoUrl(marketID: number): string {
    return `assets/images/markets/market-${marketID}.png`;
  }
}
