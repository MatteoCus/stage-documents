import {Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private translate: TranslateService) {}

  changeLanguage(lang: string): void {
    localStorage.setItem('lang', lang);
    this.translate.use(localStorage.getItem('lang') || 'it')
  }
}
