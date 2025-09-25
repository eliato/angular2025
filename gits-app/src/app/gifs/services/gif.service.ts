import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment.development';
import { GiphyResponse } from '../interfaces/giphy.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private http = inject(HttpClient);

  constructor(){
    this.loadTrendingGifs();
  }



  loadTrendingGifs() {

    this.http.get<GiphyResponse>(`${ environment.apiUrl }gifs/trending`, {
      params: {
        api_key: environment.apiKey,
        limit: '25',
        rating: 'g'
      }
    }).subscribe(response => {
      console.log(response);
    });




  }







}
