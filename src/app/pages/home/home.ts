import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {
  
  ngAfterViewInit() {
    // Dynamically inject the Cannanas frame script after view initialization
    // The script expects the <div id="cannanas"> to be already in the DOM
    if (typeof document !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://account.cannanas.club/static/frame.js';
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }
}
