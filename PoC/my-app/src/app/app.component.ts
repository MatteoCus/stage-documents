import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  triggered = false;

  constructor() { 

    window.addEventListener("load", () => {
      var x = document.getElementById("frame") as any;
        x!.contentWindow.postMessage({
          token: "eyJjcmVhdGVkIjoxNjk4Mzk5MTg2ODI3LCJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOiI5MDAwMDY4IiwidXNlcm5hbWUiOiJNYXR0ZW9DIiwiYWRfY2xpZW50X2lkIjoiOTAwMDAwMCIsImFkX29yZ19pZCI6IjAiLCJhZF9yb2xlX2lkIjoiOTAwMDAwMSIsImFkX2xhbmd1YWdlX2lkIjoiaXRfSVQiLCJhdXRob3JpemF0aW9ucyI6W119.rtagiL3YwOtgkM9ZVmvYUGBi27kgZX-PqiA9vEvrf_-9bhs-pGzbYPWF3yZ64xXDMtO8DYTc_EKgamhL14qb6w",
          lang: "it",
          theme: "DM",
          username: "Simone Brazzarola",
          m_product_id: 9013130,
          c_projectphase_id: 9144672, 
          user_id: 9000038
        }, "*");
      });
  }
}
