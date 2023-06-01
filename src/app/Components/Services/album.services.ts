import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {


  private readonly baseURL = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private readonly myClient: HttpClient) { }


  getUserAlbums(userId: any) {
    return this.myClient.get(`${this.baseURL}?userId=${userId}`);
  }

  getAlbumByID(albumId: any) {
    return this.myClient.get(`${this.baseURL}/${albumId}`);
  }
}