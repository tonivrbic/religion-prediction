import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prediction } from '../prediction.model';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  url = 'https://localhost:44303/api/UserPredictions';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Prediction[]>(this.url);
  }

  savePrediction(prediction: Prediction) {
    return this.http.post<Prediction>(this.url, prediction);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
