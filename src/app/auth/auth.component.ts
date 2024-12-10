import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="auth-container">
      <div class="auth-form">
        <div class="logo-container">
          <span class="material-icons logo-icon">flight_takeoff</span>
          <span class="logo-text">TravelEase</span>
        </div>
        <h1 class="auth-title">Welcome to TravelEase</h1>
        <p class="auth-subtitle">Your journey begins with a single click</p>
        <div class="form-group">
          <input 
            type="email" 
            class="input-field"
            placeholder="Enter your email"
            [(ngModel)]="email"
          >
        </div>
        <button 
          class="submit-button"
          (click)="onSubmit()"
        >
          Start Your Journey
        </button>
      </div>
      <div class="auth-image"></div>
    </div>
  `
})
export class AuthComponent {
  email: string = '';
  isAuthenticated: boolean = false;

  onSubmit() {
    if (this.email === 'test@gmail.com') {
      this.isAuthenticated = true;
      window.dispatchEvent(new CustomEvent('user-authenticated'));
    } else {
      alert('Please enter the correct email: test@gmail.com');
    }
  }
}