import { Component, OnInit } from '@angular/core';
import { PredictionService } from '../services/prediction.service';
import { Observable } from 'rxjs';
import { map, switchMapTo, share } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  predictions$: Observable<any[]>;
  constructor(private predictionService: PredictionService) {}

  ngOnInit(): void {
    this.predictions$ = this.predictionService.getAll().pipe(
      map(predictions =>
        predictions.map(({ name, creationDate, id, inputJson, outputJson }) => {
          return {
            name,
            creationDate,
            id,
            input: JSON.parse(inputJson),
            output: JSON.parse(outputJson)
          };
        })
      )
    );
  }

  deletePrediction(id: number) {
    this.predictions$ = this.predictionService
      .delete(id)
      .pipe(switchMapTo(this.predictions$));
  }
}
