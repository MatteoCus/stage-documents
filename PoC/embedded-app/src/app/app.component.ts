import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhasesService } from './services/phases.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'embedded-app';
  visible: boolean = true;
  logged: boolean = false;
  private phase: string = "";
  private token: string = "";
  constructor(private route: ActivatedRoute, private phasesService: PhasesService){
  }
  
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if(params && params['token'] && params['phase']){
          this.token = params['token'];
          this.phase = params['phase'];
          this.visible = false;
          this.logged = true;

          var phase = this.phase;
          var service = this.phasesService; 

          // Osserva il rendering del frame stesso: appena renderizzato, fa il fetch degli attributi
          var observer = new MutationObserver(function() {
            if (document.getElementById('main') != null) {
              service.update(phase);
              observer.disconnect();
             }
         });
         observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true})
        }
      }
    );
  }
}
