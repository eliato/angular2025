import { Routes } from '@angular/router';
import { CounterPagesComponent } from './pages/counter/counter-pages.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPagesComponent
  },
   {
    path: 'hero',
    component: HeroPageComponent
  }
];
