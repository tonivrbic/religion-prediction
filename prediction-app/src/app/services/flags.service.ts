import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlagsService {
  constructor(private http: HttpClient) {}

  detectReligion(name: string, prediction: any) {
    console.log(prediction);
    return this.http.post(
      `https://religion-prediction.azurewebsites.net/api/Flags?name=${name}`,
      prediction
    );
  }
}
