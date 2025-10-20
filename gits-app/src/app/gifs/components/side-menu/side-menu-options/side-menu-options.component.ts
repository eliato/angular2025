import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GifService } from 'src/app/gifs/services/gif.service';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  sublabel: string
}

@Component({
  selector: 'app-side-menu-options',
  imports: [
    RouterModule,

  ],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css',

})
export class SideMenuOptionsComponent {

  gifService = inject(GifService);

  public menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Most popular gifs',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      sublabel: 'Find your favorite gifs',
      route: '/dashboard/search',
    },

  ];
 }
