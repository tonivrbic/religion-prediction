import { Component, OnInit } from '@angular/core';
import { FlagsService } from '../flags.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private flagService: FlagsService) {}

  ngOnInit() {}

  // callApi() {
  //   this.flagService.detectReligion().subscribe((data: any[]) => {
  //     console.log(data);
  //     const clone = [...this.barChartData];
  //     clone[0].data = data.slice(0, 8).map(v => v * 100);
  //     this.barChartData = clone;
  //     // this.data = data.slice(0, 8).map((v, i) => {
  //     //   return {
  //     //     value: v,
  //     //     label: this.religions[i]
  //     //   };
  //     // });
  //   });
  // }
}
