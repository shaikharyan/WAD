import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  username: string = '';
  email: string = '';
  constructor() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
    this.username = localStorage.getItem('username')!;
    this.email = localStorage.getItem('email')!;
    }
    }
}
