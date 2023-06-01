import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {


  private readonly baseURL = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private readonly myClient: HttpClient) { }


  getAlbumPhotos(albumId: any) {
    return this.myClient.get(`${this.baseURL}?albumId=${albumId}`);
  }


}