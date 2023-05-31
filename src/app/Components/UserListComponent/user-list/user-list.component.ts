import { Component } from '@angular/core';

import { AddUserComponent } from '../../Add-user/add-user.component'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  
  isAddModalOpen = false;
  isUpdateModalOpen = false;
  isDeleteModalOpen = false;
  
  users = [
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    },
    {
      name: 'karim alaa',
      email: 'karimalaa195@gmail.com',
      phone: '01274987945',
      address: {
        suit: 124,
        street: 'ammar bn yasser',
        city: 'ismailia'
      }
    }
  ];



  openAddModal(): void {
    this.isAddModalOpen = !this.isAddModalOpen;
  }
}
