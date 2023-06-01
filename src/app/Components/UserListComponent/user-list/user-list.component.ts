import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../Services/user.services';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {



  users: any;
 
  

  isAddModalOpen = false;
  isUpdateModalOpen = false;
  isDeleteModalOpen = false;


  constructor(private myService: UsersService) { }

  ngOnInit(): void {
    this.myService.getAllUsers().subscribe({
      next: (data) => { this.users = data; },
      error: (err) => { console.log(err.message); },
    });
  }

  openAddModal(): void {
    this.isAddModalOpen = !this.isAddModalOpen;
  }
}
