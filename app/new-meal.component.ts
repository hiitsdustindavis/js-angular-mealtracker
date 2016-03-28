import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="add-meal">
      <h4>Add Meal:</h4>
      <div class="add-meal-inputs">
        <input class="input-add-meal" placeholder="Enter Meal Name" #newName>
        <input class="input-add-meal" placeholder="Enter Meal Description" #newDescription>
        <input class="input-add-meal" placeholder="Enter Meal Calories" #newCalories>
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
