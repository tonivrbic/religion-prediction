import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlagsService {
  constructor(private http: HttpClient) {}

  detectReligion() {
    return this.http.get('http://localhost:61629/api/Flags');
  }
}
