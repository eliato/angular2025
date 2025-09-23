import { Routes } from '@angular/router';
import { CounterPagesComponent } from './pages/counter/counter-pages.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball-page/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super-page/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPagesComponent
  },
   {
    path: 'hero',
    component: HeroPageComponent
  },
   {
    path: 'dragonball',
    component: DragonballPageComponent
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
