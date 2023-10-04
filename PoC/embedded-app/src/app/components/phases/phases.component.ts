import { Component } from '@angular/core';
import { PhasesService } from 'src/app/services/phases.service';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.css']
})
export class PhasesComponent {
  phases: Array<number> = new Array<number>();

  constructor(private phasesService: PhasesService){

    // Osserva il rendering del primo pulsante: appena renderizzato, lo preme per far comparire gli attributi
    var observer = new MutationObserver(function() {
      if (document.getElementsByClassName('phase').item(0) != null) {
        let firstButton: HTMLElement = document.getElementsByClassName('phase')[0] as HTMLElement;
        firstButton.click();
        observer.disconnect();
       }
   });
   observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true})
  }

  setActivePhase(phase: string) {
    this.phasesService.update(phase);
  }

  ngOnInit(){
    this.phases = [...Array(150).keys()];
  }
}
