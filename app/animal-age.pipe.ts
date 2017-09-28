import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "animalage",
  pure: false
})

export class AnimalAgePipe implements PipeTransform {
  transform(input: Animal[], filterByAge) {
      var output: Animal[] = [];
      if(filterByAge === "seniorCitizen") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].age >= 20) {
            output.push(input[i]);
          }
        }
        return output;
      }
      else if(filterByAge === "youngGun") {
        for(var i = 0; i < input.length; i++) {
          if (input[i].age < 20) {
            output.push(input[i]);
          }
        }
        return output;
      }
      else {
        return input;
      }
  }
}
