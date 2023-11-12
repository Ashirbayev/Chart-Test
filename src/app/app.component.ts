import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Chart, registerables } from 'chart.js/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedPeriod: string = 'month';
  myChart: Chart | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    Chart.register(...registerables);
    this.drawChart();
  }

  onPeriodChange(period: string) {

    this.selectedPeriod = period;
    this.drawChart();
  }

  private drawChart() {
    if (this.myChart) {
      this.myChart.destroy();
    }

    const data = this.dataService.getDataForPeriod(this.selectedPeriod);

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((entry) => entry.date.toDateString()),
        datasets: [
          {
            label: 'My Dataset',
            data: data.map((entry) => entry.value),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
    });
  }
}
