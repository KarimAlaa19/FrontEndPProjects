import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/NavBarComponent/navbar/navbar.component';
import { UserListComponent } from './Components/UserListComponent/user-list/user-list.component';
import { AlbumComponent } from './Components/Album/album.component';
import { AlbumListComponent } from './Components/Album-list/album-list.component';
import {AddUserComponent } from './Components/Add-user/add-user.component';
import { ErrorComponent } from './Components/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


let routes: Routes = [
  { path: '', component: UserListComponent },
  {path: 'user', component: UserListComponent},
  {path: 'user/:userId', component: AlbumListComponent},
  {path: 'user/:userId/album/:albumId', component: AlbumComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    AlbumComponent,
    AlbumListComponent,
    AddUserComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
