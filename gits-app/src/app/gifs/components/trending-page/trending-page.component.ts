import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent { }
