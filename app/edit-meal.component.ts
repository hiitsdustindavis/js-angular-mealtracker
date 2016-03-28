import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <div class= "meal-form">
    <input [(ngModel)]="meal.name" class="meal-form"/>
    <input [(ngModel)]="meal.description" class="meal-form"/>
    <input [(ngModel)]="meal.calories" class="meal-form"/>
  </div>

  `
})

export class EditMealComponent {
  public meal: Meal;
}
