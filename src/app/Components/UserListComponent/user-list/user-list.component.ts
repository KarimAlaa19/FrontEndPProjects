import { Component } from '@angular/core';
import { UsersService } from '../../Services/user.services';
import { AddUserComponent } from '../../Add-user/add-user.component'



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {



  users: any;


  isAddModalOpen = false;


  constructor(private myService: UsersService) {
    this.myService.getAllUsers().subscribe({
      next: (data) => { this.users = data; },
      error: (err) => { console.log(err.message); },
    });
  }


  toggleAddModal(): void {
    this.isAddModalOpen = !this.isAddModalOpen;
  }
}
