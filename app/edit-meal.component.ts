import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <div class= "meal-form">
  <h3>Edit Description: </h3>
    <input [(ngModel)]="meal.name" class="col-sm-8 input-lg meal-form"/>
    <input [(ngModel)]="meal.description" class="col-sm-8 input-lg meal-form"/>
    <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg meal-form"/>
  </div>
  
  `
})

export class EditMealComponent {
  public meal: Meal;
}
