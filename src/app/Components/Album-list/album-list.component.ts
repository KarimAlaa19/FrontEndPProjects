import { Component } from '@angular/core';
import { AlbumService } from '../Services/album.services';
import { UsersService } from '../Services/user.services';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent {

  albums: any;
  user: any;


  constructor(private userService: UsersService, private albumService: AlbumService, myRoute: ActivatedRoute) {
    userService.getuserByID(myRoute.snapshot.params['userId']).subscribe({
      next: (data) => { this.user = data },
      error: (err) => { console.log(err.message); },
      complete: () => {
        albumService.getUserAlbums(myRoute.snapshot.params['userId']).subscribe({
          next: (data) => { this.albums = data },
          error: (err) => { console.log(err.message); }
        });
      }
    });
  }
}
