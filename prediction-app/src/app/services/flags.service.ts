import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlagsService {
  constructor(private http: HttpClient) {}

  detectReligion(name: string, prediction: any) {
    return this.http.post(
      `${environment.apiUrl}api/Flags?name=${name}`,
      prediction
    );
  }
}
