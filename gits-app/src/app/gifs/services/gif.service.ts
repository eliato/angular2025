import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif';
import { GifMapper } from '../mappers/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const GIF_KEY = 'gifs';
const loadFromLocalStorage = (): Record<string, Gif[]> => {
  const data = localStorage.getItem(GIF_KEY);
  return data ? JSON.parse(data) : {};
}

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistorryKeys = computed(() => Object.keys(this.searchHistory()));


  constructor(){
    this.loadTrendingGifs();
  }

  saveGifsLocalStorage = effect(() => {
    const gifs = this.searchHistory();
    localStorage.setItem(GIF_KEY, JSON.stringify(gifs));
  });

  loadTrendingGifs() {

    this.http.get<GiphyResponse>(`${ environment.giphyApiUrl }/trending`, {
      params: {
        api_key: environment.apiKey,
        limit: '25',
        rating: 'g'
      }
    }).subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log(GIF_KEY, gifs);

    });



  }


searchGifs(query: string): Observable<Gif[]> {

  return  this.http.get<GiphyResponse>(`${ environment.giphyApiUrl }/search`, {
      params: {
        api_key: environment.apiKey,
        q: query,
        limit: '25',
        rating: 'g'
      }
    }).pipe(
       map( ({ data }) => data ),
       map( ( items ) => GifMapper.mapGiphyItemsToGifArray(items)),

       tap(items => {
        this.searchHistory.update( (current) => ({
          ...current,
          [query.toLowerCase()]: items
        }) );
       })
    );/* .subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log('gifs', gifs);
    }); */
  }

getHistoryGifs(query: string): Gif[] {
  return this.searchHistory()[query.toLowerCase()] ?? [];
}


}
