import { Component, inject } from '@angular/core';
import { GifsListComponent } from "../gifs-list/gifs-list.component";
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-search-page',
  imports: [GifsListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',

})
export default class SearchPageComponent {

girService = inject(GifService);


onSearch(query: string) {
this.girService.searchGifs(query);
}
}
