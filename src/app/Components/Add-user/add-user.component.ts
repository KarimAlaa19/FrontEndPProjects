import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  @Input() usersArr: any;

  @Output('closeModal') closeEvent = new EventEmitter<boolean>();



  addUser(e: any, _name: string, _email: string, _phone: string, _suite: string, _street: string, _city: string) {
    if (_name && _email && _phone && _suite && _street && _city) {
      this.usersArr.push({
        name: _name,
        email: _email,
        phone: _phone,
        address: {
          suite: _suite,
          street: _street,
          city: _city
        }
      });

      this.close();
    }
  }

  close() {
    this.closeEvent.emit(false);
  }
}
