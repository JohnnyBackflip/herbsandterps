import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-age-verification',
  imports: [],
  templateUrl: './age-verification.html',
  styleUrl: './age-verification.scss'
})
export class AgeVerification implements OnInit {
  isVerified = signal(true); // Default to true to prevent flash, then check in ngOnInit

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const verified = localStorage.getItem('ageVerified');
      if (verified !== 'true') {
        this.isVerified.set(false);
        // Prevent scrolling while modal is active
        document.body.style.overflow = 'hidden';
      }
    }
  }

  confirmAge() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('ageVerified', 'true');
      this.isVerified.set(true);
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  }

  declineAge() {
    if (typeof window !== 'undefined') {
      window.location.href = 'https://www.google.com';
    }
  }
}
