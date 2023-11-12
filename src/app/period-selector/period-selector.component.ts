import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-period-selector',
  templateUrl: './period-selector.component.html',
  styles: []
})
export class PeriodSelectorComponent {
  @Output() periodChange = new EventEmitter<string>();
  selectedPeriod: string = 'week';

  onPeriodChange() {
    console.log(444)
    this.periodChange.emit(this.selectedPeriod);
  }
}
