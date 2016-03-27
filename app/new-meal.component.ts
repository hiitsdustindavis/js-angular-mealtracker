import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="add-meal">
      <h3>Add Meal:</h3>
      <div class="add-meal-inputs">
        <div class="input-group">
          <label>Enter Meal Name:</label>
          <input placeholder="name" #newName>
        </div>
        <div class="input-group">
          <label>Enter Meal Description:</label>
          <input placeholder="meal description" #newDescription>
        </div>
        <div class="input-group">
          <label>Enter Meal Calories:</label>
          <input placeholder="calories" #newCalories>
        </div>
      </div>
        <button (click)="addMeal(newName, newDescription, newCalories)">Add</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(name: HTMLInputElement, description: HTMLInputElement, calories: HTMLInputElement) {
    this.onSubmitNewMeal.emit([name.value, description.value, calories.value]);
    name.value = "";
    description.value = "";
    calories.value = "";
  }
}
