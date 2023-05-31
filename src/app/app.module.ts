import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/NavBarComponent/navbar/navbar.component';
import { UserListComponent } from './Components/UserListComponent/user-list/user-list.component';
import { AlbumComponent } from './Components/Album/album.component';
import { AlbumListComponent } from './Components/Album-list/album-list.component';
import {AddUserComponent } from './Components/Add-user/add-user.component';
import { UserInfoComponent } from './Components/User-info/user-info.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    AlbumComponent,
    AlbumListComponent,
    AddUserComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
