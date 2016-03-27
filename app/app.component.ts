import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template:`
    <div class="container">
    <header class="header">
      <h1>BENEFIT</h1>
      <ul class="nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Health</li>
      </ul>
    </header>
      <meal-list
      [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
    `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("burger", "Create To-Do List app.", 0),
      new Meal("sandwich", "bread cheese meat", 300),
      new Meal("fish", "salmon salt lemon", 301)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log("Maude here:" + clickedMeal);
  }
}
