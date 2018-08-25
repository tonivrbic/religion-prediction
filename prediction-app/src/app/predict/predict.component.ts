import { Component, OnInit } from '@angular/core';
import { FlagsService } from '../flags.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { PredictionDialogComponent } from '../prediction-dialog/prediction-dialog.component';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss']
})
export class PredictComponent implements OnInit {
  name = '';
  predictionResult = null;
  public barChartData: any[] = [{ data: [40, 60, 36, 8, 4, 27, 15, 4] }];
  data: { value: any; label: any }[];
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

  flagColors = ['red', 'green', 'blue', 'gold', 'white', 'black', 'orange'];
  formData = {};
  selectColors = ['mainhue', 'topleft', 'botright'];
  checkboxColors = ['red', 'green', 'blue', 'gold', 'white', 'black', 'orange'];
  numberedTypes = [
    'bars',
    'stripes',
    'colours',
    'circles',
    'crosses',
    'saltires',
    'quarters',
    'sunstars'
  ];
  checkboxFeatures = ['crescent', 'triangle', 'icon', 'animate', 'text'];
  constructor(private flagService: FlagsService, private dialog: MatDialog) {}
  formGroup: FormGroup;
  ngOnInit() {
    this.formGroup = new FormGroup({
      mainhue: new FormControl('', Validators.required),
      topleft: new FormControl('', Validators.required),
      botright: new FormControl('', Validators.required),
      red: new FormControl(false),
      green: new FormControl(false),
      blue: new FormControl(false),
      gold: new FormControl(false),
      white: new FormControl(false),
      black: new FormControl(false),
      orange: new FormControl(false),
      bars: new FormControl(0, Validators.required),
      stripes: new FormControl(0, Validators.required),
      colours: new FormControl(0, Validators.required),
      circles: new FormControl(0, Validators.required),
      crosses: new FormControl(0, Validators.required),
      saltires: new FormControl(0, Validators.required),
      quarters: new FormControl(0, Validators.required),
      sunstars: new FormControl(0, Validators.required),
      crescent: new FormControl(false),
      triangle: new FormControl(false),
      icon: new FormControl(false),
      animate: new FormControl(false),
      text: new FormControl(false)
    });
  }

  callApi() {
    const prediction = {
      religion: 0,
      ...this.formGroup.value
    };

    for (const key in prediction) {
      if (prediction.hasOwnProperty(key)) {
        if (prediction[key] === true) {
          prediction[key] = 1;
        } else if (prediction[key] === false) {
          prediction[key] = 0;
        }
      }
    }
    this.flagService
      .detectReligion(this.name, prediction)
      .subscribe((data: any[]) => {
        // console.log(data);
        // const clone = [...this.barChartData];
        // clone[0].data = data.slice(0, 8).map(v => v * 100);
        // this.barChartData = clone;
        // this.data = data.slice(0, 8).map((v, i) => {
        //   return {
        //     value: v,
        //     label: this.religions[i]
        //   };
        // });
        this.dialog
          .open(PredictionDialogComponent, {
            data: data,
            width: '80%'
          })
          .afterClosed()
          .subscribe(result => {
            if (result === true) {
              // save prediction
            }
          });
        // this.predictionResult = data;
      });
  }
}
