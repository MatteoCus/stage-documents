import { Component } from '@angular/core';
import { Observable, Subject, flatMap, mergeMap, switchMap } from 'rxjs';
import { Attribute } from 'src/app/attribute.class';
import { AttributesService } from 'src/app/services/attributes.service';
import { PhasesService } from 'src/app/services/phases.service';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent {
  public activeAttributes: Array<Attribute> = new Array<Attribute>();

  constructor(private attributesService: AttributesService, private phasesService: PhasesService) {
    
    this.phasesService.getActivePhase().pipe(
      mergeMap(phase => this.attributesService.fetch(phase))
    ).subscribe(attributes => this.activeAttributes = attributes);
  }

  public uploadAttributes(phase: string, attributes: Array<Attribute>) { 
    this.attributesService.upload(phase,attributes).subscribe(
      result => console.log(result)
    );
   }


}
