import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private readonly baseURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private readonly myClient: HttpClient) { }


  getAllUsers() {
    return this.myClient.get(this.baseURL);
  }


  getuserByID(userId: any) {
    return this.myClient.get(`${this.baseURL}/${userId}`);
  }
}