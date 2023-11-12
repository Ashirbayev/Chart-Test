import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private allData = [
    { date: new Date('2023-01-01'), value: 8 },
    { date: new Date('2023-02-01'), value: 10 },
    { date: new Date('2023-03-01'), value: 12 },
    { date: new Date('2023-04-01'), value: 15 },
    { date: new Date('2023-05-01'), value: 18 },
    { date: new Date('2023-06-01'), value: 20 },
    { date: new Date('2023-07-01'), value: 22 },
    { date: new Date('2023-08-01'), value: 25 },
    { date: new Date('2023-09-01'), value: 28 },
    { date: new Date('2023-10-01'), value: 30 },
    { date: new Date('2023-11-01'), value: 32 },
    { date: new Date('2023-11-12'), value: 8 },
    { date: new Date('2023-11-13'), value: 10 },
  ];


  getData() {
    return this.allData;
  }

  getDataForPeriod(period: string) {
    const currentDate = new Date();
    let startDate: Date;

    switch (period) {
      case 'week':
        startDate = new Date(currentDate);
        startDate.setDate(currentDate.getDate() - 7);
        break;
      case 'month':
        startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
        break;
      case 'year':
        startDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());
        break;
      default:
        startDate = new Date(currentDate);
        startDate.setDate(currentDate.getDate() - 7);
        break;
    }

    return this.allData.filter(entry => {
      const entryDate = new Date(entry.date);
      return entryDate >= startDate && entryDate <= currentDate;
    });
  }


}
