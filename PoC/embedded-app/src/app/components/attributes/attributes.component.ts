import { Component } from '@angular/core';
import { Attribute } from 'src/app/attribute.class';
import { AttributesService } from 'src/app/services/attributes.service';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent {

  attributes: Array<Attribute> = new Array<Attribute>();

  constructor(public attributesService: AttributesService) {}

  public uploadAttributes(phase: string, attributes: Array<Attribute>) { 
    this.attributesService.upload(phase,attributes).subscribe(
      result => console.log(result)
    );
   }

  public get Attributes() { return this.attributes;}

  public fetchAttributes(phase: string){
    this.attributesService.fetch(phase).subscribe(
      data => this.attributes = data
    );
  }

}
