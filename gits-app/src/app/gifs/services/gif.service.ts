import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif';
import { GifMapper } from '../mappers/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  constructor(){
    this.loadTrendingGifs();
  }



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
      console.log('gifs', gifs);

    });



  }


searchGifs(query: string) {

  return  this.http.get<GiphyResponse>(`${ environment.giphyApiUrl }/search`, {
      params: {
        api_key: environment.apiKey,
        q: query,
        limit: '25',
        rating: 'g'
      }
    }).pipe(
       map( ({ data }) => data ),
       map( ( items ) => GifMapper.mapGiphyItemsToGifArray(items))
    );/* .subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log('gifs', gifs);
    }); */
  }




}
