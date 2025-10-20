import { Component, inject, signal } from '@angular/core';
import { GifsListComponent } from "../gifs-list/gifs-list.component";
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gif';
import { GifMapper } from '../../mappers/gif.mapper';

@Component({
  selector: 'app-search-page',
  imports: [GifsListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',

})
export default class SearchPageComponent {

girService = inject(GifService);
gifs = signal<Gif[]>([]);



onSearch(query: string) {
this.girService.searchGifs(query).subscribe((resp) => {
  this.gifs.set(resp);
  console.log(resp);
});
}


}
