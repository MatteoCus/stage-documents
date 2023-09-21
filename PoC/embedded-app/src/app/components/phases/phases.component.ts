import { Component } from '@angular/core';
import { PhasesService } from 'src/app/services/phases.service';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.css']
})
export class PhasesComponent {
  phases: Array<string> = new Array<string>();

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
    // modificare la fase attiva in 'active-phase-service'
  }

  ngOnInit(){
    this.phasesService.fetch().subscribe(
      data => {
        this.phases = data;
      }
    )
  }
}
