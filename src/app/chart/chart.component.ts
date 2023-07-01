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

  currentMonth = new Date().getMonth();
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  constructor(private activeModal: NgbActiveModal) {}

  ngAfterViewInit() {
    Chart.register(...registerables);

    const ctx = document.getElementById('price-chart') as HTMLCanvasElement;
    //const ctx = this.chartCanvas?.nativeElement.getContext('2d');

    const labels = [];
    for (let i = 5; i >= 0; i--) {
      const monthIndex = (this.currentMonth + 12 - i) % 12;
      labels.push(this.monthNames[monthIndex]);
  }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
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
