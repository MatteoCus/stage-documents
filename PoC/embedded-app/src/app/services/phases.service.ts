import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhasesService {

  private activePhase : Subject<string> = new Subject<string>();
  
  constructor(private http: HttpClient) { }

  public fetch(): Observable<Array<string>> {
    return this.http.get<Array<string>>("http://localhost:3000/phases");
  }

  public update(phase: string): void {
    this.activePhase.next(phase);
  }

  public getActivePhase(): Observable<string> {
    return this.activePhase;
  }
}