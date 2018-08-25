import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit, OnChanges {
  @Input()
  data;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [
    'Catholic',
    'Other Christian',
    'Muslim',
    'Buddhist',
    'Hindu',
    'Ethic',
    'Marxist',
    'Other'
  ];
  public barChartType = 'bar';
  public barChartLegend = false;
  public colors = [
    {
      backgroundColor: [
        '#ffeb3b',
        '#1976d2',
        '#388e3c',
        '#f57c00',
        '#795548',
        '#8e24aa',
        '#e53935',
        '#b0bec5'
      ]
    }
  ];
  public barChartData: any[] = [{ data: [40, 60, 36, 8, 4, 27, 15, 4] }];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue !== null) {
      const clone = [...this.barChartData];
      clone[0].data = changes.data.currentValue.slice(0, 8).map(v => v * 100);
      this.barChartData = clone;
    }
  }
}
