import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas?: ElementRef;

  @Input() priceData?: number[];

  constructor(private activeModal: NgbActiveModal) {}

  ngAfterViewInit() {
    Chart.register(...registerables);

    const ctx = document.getElementById('price-chart') as HTMLCanvasElement;
    //const ctx = this.chartCanvas?.nativeElement.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['6 months ago', '5 months ago', '4 months ago', '3 months ago', '2 months ago', '1 month ago'],
        datasets: [
          {
            label: 'Price',
            data: this.priceData,
            borderColor: 'blue',
            fill: false
          }
        ]
      }
    });
  }

  closeModal() {
    this.activeModal.close();
  }
}
