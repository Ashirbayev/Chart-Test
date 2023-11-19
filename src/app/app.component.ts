import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Chart, registerables } from 'chart.js/auto';
type ValidChartType = 'bar' | 'line' | 'pie' ;
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedPeriod: string = 'month';
  myChart: Chart | undefined;
  selectedChartType: ValidChartType = 'bar';
  startDate: Date | undefined;
  endDate: Date | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    Chart.register(...registerables);
    this.drawChart();
  }

  onPeriodChange(period: string) {
    this.selectedPeriod = period;
    this.drawChart();
  }


  onChartTypeChange(event: any) {
    console.log(event)
    const chartType = event.value as ValidChartType;
    this.selectedChartType = chartType;
    this.drawChart();
  }

  onDateChange() {
    console.log(11)
    this.drawChart();
  }

  private drawChart() {
    if (this.myChart) {
      this.myChart.destroy();
    }

    const data = this.dataService.getDataForDateRange(this.selectedPeriod, this.startDate, this.endDate);

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.myChart = new Chart(ctx, {
      type: this.selectedChartType,
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
