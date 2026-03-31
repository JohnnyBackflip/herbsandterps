import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { AgeVerification } from './components/age-verification/age-verification';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, AgeVerification],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('herbs-n-terps');
}
