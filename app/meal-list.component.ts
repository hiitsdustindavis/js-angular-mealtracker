import { Component, EventEmitter } from 'angular2/core';
import { MealDisplayComponent } from './meal-display.component';
import { Meal } from './meal.model';

import { NewMealComponent } from './new-meal.component'
import {CaloriesPipe} from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriesPipe],
  directives: [MealDisplayComponent, NewMealComponent],
  template: `
  <div class="add-meal-filter-select">
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>

  <h3>Meals by Calorie</h3>
  <select class="select-calorie-filter" (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="low">Show Low Calorie Meals</option>
    <option value="high">Show High Calorie Meals</option>
  </select>
  </div>

  <div class="meal-cards">
    <meal-display *ngFor="#currentMeal of mealList | calories:filterCalories"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
    </meal-display>
  </div>


  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: string): void {
    var mealCalories: number = parseFloat(newMeal[2]);
    this.mealList.push(
      new Meal(newMeal[0], newMeal[1], mealCalories)
    )
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
    console.log(this.filterCalories);
  }
}
