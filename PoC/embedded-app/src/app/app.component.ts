import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  private phase: string = "";
  constructor(private route: ActivatedRoute){}
  
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if(params && params['token'] && params['phase']){
          console.log(params['token']);
          console.log(params['phase']);
          this.token = params['token'];
          this.phase = params['phase'];
          this.visible = false;
          this.logged = true;
        }
      }
    );
  }
}
