import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
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
  public barChartLabels: string[] = [
    'Catholic',
    'Other Christian',
    'Muslim',
    'Buddhist',
    'Hindu',
    'Ethnic',
    'Marxist',
    'Other'
  ];
  public barChartType = 'bar';
  public barChartLegend = false;

  public barChartData: any[] = [{ data: [40, 60, 36, 8, 4, 27, 15, 4] }];
  public countriesByContinent: any[] = [{ data: [31, 17, 35, 52, 39, 20] }];
  public colorsInFlags: any[] = [
    {
      data: [153, 91, 99, 91, 146, 52, 26]
    }
  ];
  public mainhueOfFlags = [
    {
      data: [5, 40, 2, 19, 31, 4, 71, 22]
    }
  ];
  religions = [
    'Catholic',
    'Other Christian',
    'Muslim',
    'Buddhist',
    'Hindu',
    'Ethnic',
    'Marxist',
    'Other'
  ];
  continents = [
    'North America',
    'South America',
    'Europe',
    'Africa',
    'Asia',
    'Oceania'
  ];
  flagColors = ['red', 'green', 'blue', 'gold', 'white', 'black', 'orange'];
  mainhues = ['black', 'blue', 'gold', 'green', 'orange', 'red', 'white'];
  canvasFlagColors = [
    {
      backgroundColor: [
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#ffd700',
        '#cccccc',
        '#000000',
        '#ffa500'
      ]
    }
  ];
  canvasMainhues = [
    {
      backgroundColor: [
        '#000000',
        '#0000ff',
        '#ffd700',
        '#00ff00',
        '#ffa500',
        '#ff0000',
        '#cccccc'
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
