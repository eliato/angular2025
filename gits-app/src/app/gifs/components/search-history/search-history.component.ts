import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-search-history',
  imports: [],
  templateUrl: './search-history.component.html',
  styleUrl: './search-history.component.css'
})
export default class SearchHistoryComponent {

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map(params => params['query'] ))
  );

}
