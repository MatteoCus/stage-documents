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
  crossOriginData = "";
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

    window.addEventListener("message", (event) => {
      console.log("Evento: " + event.data);
      if(event.source == parent) {
        console.log(event.data);
        this.crossOriginData = event.data;
      }
    });

    this.route.queryParams
      .subscribe(params => {
        if(params && params['inside']){
          console.log(params['inside']);
          if(params['inside'] == "true") {
            this.visible = false;
            console.log(this.visible);
          }
        }
      }
    );
  }
}
