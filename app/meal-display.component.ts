import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [EditMealComponent],
  template: `
    <h4 (click)="mealClicked()" >{{ meal.name }}</h4>
    <div class="edit-meal" *ngIf="mealSelected">
      <div class="edit-meal-output">
        <p>{{ meal.description }}</p>
        <p>{{ meal.calories }} Calories</p>
        <button (click)="editClicked()">Edit Meal</button>
      </div>
      <div class="edit-meal-inputs">
        <edit-meal [meal]="meal" *ngIf="editSelected"></edit-meal>
      </div>
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
