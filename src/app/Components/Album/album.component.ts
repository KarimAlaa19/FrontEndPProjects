import { Component } from '@angular/core';
import { AlbumService } from '../../Services/album.services';
import { UsersService } from '../../Services/user.services';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../Services/photos.services';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  album: any;
  errMsg: any;
  status: any;
  user: any;
  photos: any;


  constructor(private userService: UsersService, private albumService: AlbumService, private PhotoService: PhotoService, myRoute: ActivatedRoute) {
    userService.getuserByID(myRoute.snapshot.params['userId']).subscribe({
      next: (data) => { this.user = data },
      error: (err) => { console.log(err.message); },
      complete: () => {
        albumService.getAlbumByID(myRoute.snapshot.params['albumId']).subscribe({
          next: (data) => { this.album = data },
          error: (err) => { console.log(err.message); },
          complete: () => {
            PhotoService.getAlbumPhotos(myRoute.snapshot.params['albumId']).subscribe({
              next: (data) => { this.photos = data },
              error: (err) => { console.log(err.message); },
            });
          }
        });
      }
    });
  }
}
