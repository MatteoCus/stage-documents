import { Injectable } from '@angular/core';
import { Attribute } from '../attribute.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  constructor(private http: HttpClient) { }

  fetch(phase: string) : Observable<Array<Attribute>> {
    return this.http.get<Array<Attribute>>("http://localhost:3000/" + phase.toLowerCase());
  }

  upload(phase: string, attributes: Array<Attribute>): Observable<any> {
    return this.http.post<Array<string>>("http://localhost:3000/" + phase.toLowerCase(), attributes);
  }

}
