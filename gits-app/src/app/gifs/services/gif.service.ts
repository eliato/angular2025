import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private http = inject(HttpClient);


  loadTrendingGifs() {


  }







}
