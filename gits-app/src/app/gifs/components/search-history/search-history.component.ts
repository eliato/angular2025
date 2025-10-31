import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '../../services/gif.service';
import { GifsListComponent } from "../gifs-list/gifs-list.component";

@Component({
  selector: 'app-search-history',
  imports: [GifsListComponent],
  templateUrl: './search-history.component.html',
  styleUrl: './search-history.component.css'
})
export default class SearchHistoryComponent {

  gifService = inject(GifService);

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map(params => params['query'] ))
  );

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  }
);

gifsByKeyFormatted = computed(() => {
    const  groups = [];
    const gifs = this.gifsByKey() || [];
    for (let i = 0; i < gifs.length; i += 3) {
      groups.push( gifs.slice(i, i + 3) );
    }
    return groups;
  });

}
