import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = { username: '', password: '' };
  logSuccess = false;
  constructor(private router: Router) {}


  onSubmit() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (username === this.login.username && password === this.login.password) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid username or password');
    }
    this.logSuccess = true;
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
