import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal-display.component';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component'
import {CaloriesPipe} from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealComponent, NewMealComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="low">Show Low Calorie Meals</option>
    <option value="high">Show High Calorie Meals</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
  </meal-display>
  <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log("Hector here:" + clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: string): void {
    var mealCalories: number = parseFloat(newMeal[2]);
    this.mealList.push(
      new Meal(newMeal[0], newMeal[1], mealCalories)
    )
  }
}
