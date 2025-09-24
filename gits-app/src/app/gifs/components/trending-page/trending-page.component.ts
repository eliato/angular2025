import { Component } from '@angular/core';
import { GifsListComponent } from "../gifs-list/gifs-list.component";

@Component({
  selector: 'app-trending-page',
  imports: [GifsListComponent],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css',
})
export default class TrendingPageComponent { }
