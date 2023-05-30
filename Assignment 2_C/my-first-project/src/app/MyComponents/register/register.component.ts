import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationSuccess = false;
  user = { username: '', email: '', password: '' };

  constructor(private router: Router) {}

  onSubmit() {
    localStorage.setItem('username', this.user.username);
    localStorage.setItem('email', this.user.email);
    localStorage.setItem('password', this.user.password);
    alert('Registration successful');
    // this.navigate(['/login']);
    this.router.navigate(['/login']);
    this.registrationSuccess = true;

  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
 
}
