import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { getCurrencySymbol } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product: Product | undefined;
  myCurrency = getCurrencySymbol("TRY", "narrow");

  constructor(private modalService: NgbModal) {}

  getMarketLogoUrl(marketID: number): string {
    return `assets/images/markets/market-${marketID}.png`;
  }

  getChart(priceData: number[]) {
    const modalRef = this.modalService.open(ChartComponent);
    modalRef.componentInstance.priceData = priceData;
    console.log(priceData)
  }
}
