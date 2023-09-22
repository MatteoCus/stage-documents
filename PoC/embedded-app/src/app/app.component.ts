import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhasesService } from './services/phases.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'embedded-app';
  visible: boolean = true;
  logged: boolean = false;
  private token: string = "";
  constructor(private translate: TranslateService, private route: ActivatedRoute, private phasesService: PhasesService){
    this.translate.setDefaultLang('it');
    this.translate.use(localStorage.getItem('lang') || 'it');
  }

  setLanguage(lang: string): void {
    localStorage.setItem('lang', lang);
    this.translate.use(localStorage.getItem('lang') || 'it');
  }
  
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if(params && params['token'] && params['phase'] && params['lang']){

          this.token = params['token'];
          const lang = params['lang'];

          this.setLanguage(lang);

          this.visible = false;
          this.logged = true;

          var phase = params['phase'];
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
