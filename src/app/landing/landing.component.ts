import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="landing-container">
      <h1>Design Your Perfect Journey</h1>
      <div class="form-container">
        <div class="form-group">
          <label class="section-label">Where would you like to go?</label>
          <select [(ngModel)]="selectedDestination" class="select-field">
            <option value="">Choose your destination</option>
            <option value="london">London, England</option>
            <option value="paris">Paris, France</option>
            <option value="tokyo">Tokyo, Japan</option>
            <option value="bali">Bali, Indonesia</option>
            <option value="nyc">New York City, USA</option>
          </select>
        </div>

        <div class="form-group">
          <label class="section-label">When are you planning to travel?</label>
          <input 
            type="date" 
            [(ngModel)]="travelDate"
            class="input-field"
          >
        </div>

        <div class="form-group">
          <label class="section-label">Who's joining your adventure?</label>
          <div class="pods-container">
            <div 
              *ngFor="let companion of companions"
              class="pod"
              [class.selected]="selectedCompanion === companion.value"
              (click)="selectCompanion(companion.value)"
            >
              <span class="material-icons">{{companion.icon}}</span>
              <h3>{{companion.label}}</h3>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="section-label">What's your food preference?</label>
          <div class="radio-group">
            <label class="radio-option" *ngFor="let food of foodOptions">
              <input 
                type="radio" 
                [value]="food.value" 
                [(ngModel)]="foodPreference"
                name="foodPreference"
              >
              <span class="material-icons">{{food.icon}}</span>
              {{food.label}}
            </label>
          </div>
        </div>

        <div class="form-group">
          <label class="section-label">Choose your preferred activity</label>
          <div class="pods-container">
            <div 
              *ngFor="let activity of activities"
              class="pod"
              [class.selected]="selectedActivity === activity.value"
              (click)="selectActivity(activity.value)"
            >
              <span class="material-icons">{{activity.icon}}</span>
              <h3>{{activity.label}}</h3>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="section-label">What's your budget range?</label>
          <div class="pods-container">
            <div 
              *ngFor="let budget of budgetOptions"
              class="pod"
              [class.selected]="selectedBudget === budget.value"
              (click)="selectBudget(budget.value)"
            >
              <span class="material-icons">{{budget.icon}}</span>
              <h3>{{budget.label}}</h3>
              <p>{{budget.range}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LandingComponent {
  selectedDestination: string = '';
  travelDate: string = '';
  selectedBudget: string | null = null;
  selectedCompanion: string | null = null;
  foodPreference: string | null = null;
  selectedActivity: string | null = null;

  companions = [
    { 
      value: 'solo', 
      label: 'Solo', 
      icon: 'person'
    },
    { 
      value: 'couple', 
      label: 'Couple', 
      icon: 'favorite'
    },
    { 
      value: 'family', 
      label: 'Family', 
      icon: 'family_restroom'
    },
    { 
      value: 'friends', 
      label: 'Friends', 
      icon: 'groups'
    }
  ];

  foodOptions = [
    {
      value: 'veg',
      label: 'Vegetarian',
      icon: 'grass'
    },
    {
      value: 'nonveg',
      label: 'Non-Vegetarian',
      icon: 'restaurant_menu'
    }
  ];

  activities = [
    { 
      value: 'beaches', 
      label: 'Beaches', 
      icon: 'beach_access'
    },
    { 
      value: 'city', 
      label: 'City Sighting', 
      icon: 'location_city'
    },
    { 
      value: 'adventure', 
      label: 'Outdoor Adventure', 
      icon: 'hiking'
    },
    { 
      value: 'festival', 
      label: 'Festival/Events', 
      icon: 'festival'
    },
    { 
      value: 'nightlife', 
      label: 'Nightlife', 
      icon: 'nightlife'
    },
    { 
      value: 'spa', 
      label: 'Spa Wellness', 
      icon: 'spa'
    }
  ];

  budgetOptions = [
    {
      value: 'low',
      label: 'Budget Friendly',
      icon: 'savings',
      range: '0-1000 £'
    },
    {
      value: 'medium',
      label: 'Mid Range',
      icon: 'account_balance_wallet',
      range: '1000-2500 £'
    },
    {
      value: 'high',
      label: 'Luxury',
      icon: 'diamond',
      range: '2500+ £'
    }
  ];

  selectCompanion(companion: string) {
    this.selectedCompanion = companion;
  }

  selectFood(food: string) {
    this.foodPreference = food;
  }

  selectActivity(activity: string) {
    this.selectedActivity = activity;
  }

  selectBudget(budget: string) {
    this.selectedBudget = budget;
  }
}