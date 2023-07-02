import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appPriceChange]'
})
export class PriceChangeDirective {

  @Input('appPriceChange') currentPrice!: number;
  @Input() lastMonthPrice!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const priceChange = ((this.currentPrice - this.lastMonthPrice) / this.lastMonthPrice) * 100;
    this.el.nativeElement.querySelector('.discount').textContent = priceChange.toFixed(2) + '%';

    if (priceChange > 0) {
      this.renderer.addClass(this.el.nativeElement.querySelector('.discount'), 'positive-discount');
      this.renderer.removeClass(this.el.nativeElement.querySelector('.discount'), 'negative-discount');
    } else {
      this.renderer.addClass(this.el.nativeElement.querySelector('.discount'), 'negative-discount');
      this.renderer.removeClass(this.el.nativeElement.querySelector('.discount'), 'positive-discount');
    }
  }

}
