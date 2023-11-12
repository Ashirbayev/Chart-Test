import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData() {
    return [
      { date: new Date('2023-11-01'), value: 10 },
      { date: new Date('2023-11-02'), value: 15 },
      { date: new Date('2023-11-03'), value: 8 },
      { date: new Date('2023-11-04'), value: 8 },
      { date: new Date('2023-11-05'), value: 8 },
      { date: new Date('2023-11-06'), value: 8 },
      { date: new Date('2023-11-07'), value: 8 },
      { date: new Date('2023-11-08'), value: 8 },
      { date: new Date('2023-11-09'), value: 8 },
      { date: new Date('2023-11-10'), value: 8 },
      { date: new Date('2023-11-11'), value: 8 },
      { date: new Date('2023-11-12'), value: 8 },
      { date: new Date('2023-11-13'), value: 8 },
    ];
  }
}
