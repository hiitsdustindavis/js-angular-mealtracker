import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div>
      <h3>Add Meal:</h3>
      <label>Enter Meal Name:</label>
      <input placeholder="name" #newName>
      <label>Enter Meal Description:</label>
      <input placeholder="meal description" #newDescription>
      <label>Enter Meal Calories:</label>
      <input placeholder="calories" #newCalories>
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
