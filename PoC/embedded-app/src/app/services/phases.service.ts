import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhasesService {

  constructor(private http: HttpClient) { }

  fetch(): Observable<Array<string>> {
    return this.http.get<Array<string>>("http://localhost:3000/phases");
  }
  
}
