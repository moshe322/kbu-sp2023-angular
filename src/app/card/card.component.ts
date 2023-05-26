import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product: Product | undefined;
  myCurrency = getCurrencySymbol("TRY", "narrow");

  getMarketLogoUrl(marketID: number): string {
    return `assets/images/markets/market-${marketID}.png`;
  }
}
