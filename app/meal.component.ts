import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h3>{{ meal.name }}</h3>
    <h3>{{ meal.description }}</h3>
    <h3>{{ meal.calories }}</h3>
  `
})

export class MealComponent {
  public meal: Meal;
}
