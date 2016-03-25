import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [EditMealComponent],
  template: `
    <h3 (click)="mealClicked()" >{{ meal.name }}</h3>
    <div *ngIf="mealSelected">
      <h3>{{ meal.description }}</h3>
      <h3>{{ meal.calories }}</h3>
      <button (click)="editClicked()">Edit Meal</button>
      <edit-meal [meal]="meal" *ngIf="editSelected"></edit-meal>
    </div>


  `
})

export class MealDisplayComponent {
  public meal: Meal;
  public mealSelected: boolean = false;
  public editSelected: boolean = false;
  mealClicked(): void {
    this.mealSelected = !this.mealSelected;
  }
  editClicked(): void {
    this.editSelected = !this.editSelected;
  }
}
