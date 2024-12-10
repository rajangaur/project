import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './landing/landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AuthComponent, LandingComponent],
  template: `
    <app-auth *ngIf="!isAuthenticated"></app-auth>
    <app-landing *ngIf="isAuthenticated"></app-landing>
  `
})
export class AppComponent {
  isAuthenticated = false;

  constructor() {
    window.addEventListener('user-authenticated', () => {
      this.isAuthenticated = true;
    });
  }
}