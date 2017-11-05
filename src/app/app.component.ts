import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
    street: '',
    unit: '',
    city: '',
    state: ''
  };

  register = false;
  onSubmit(){
    // console.log(user.first_name)
    this.register = true;
  }
}
