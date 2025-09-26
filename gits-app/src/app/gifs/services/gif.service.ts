import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);

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
      console.log({resp});
    });




  }







}
