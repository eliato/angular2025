import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/components/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'search',
        loadComponent: () => import('./gifs/components/search-page/search-page.component')
      },
       {
        path: 'history/:query',
        loadComponent: () => import('./gifs/components/search-history/search-history.component')
      },
      {
        path: 'trending',
        loadComponent: () => import('./gifs/components/trending-page/trending-page.component')
      },
      {
        path: '**',
        redirectTo: 'trending',

      }

    ]
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
