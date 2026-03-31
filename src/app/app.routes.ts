import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Impressum } from './pages/impressum/impressum';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'impressum', component: Impressum },
  { path: '**', redirectTo: '' }
];
