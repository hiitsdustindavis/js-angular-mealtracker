import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var caloriesState = args[0];
    console.log(args[0]);
    if(caloriesState === "low" ) {
      return input.filter(function(meal) {
        return meal.calories < 300;
      });
    } else if (caloriesState === "high") {
      return input.filter(function(meal) {
        return meal.calories >= 300;
      });
    } else {
      return input;
    }
  }
}
