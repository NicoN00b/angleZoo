import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="container-fluid">
    <select class="filter" (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals </option>
      <option value="seniorCitizen">Senior Citizens </option>
      <option value="youngGun">Young Guns </option>
    </select>

    <div id="columnify">
      <div [class]="localColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | animalage:filterByAge">{{currentAnimal.species}}<br>
      {{currentAnimal.name}}
      <br>
      Age: {{currentAnimal.age}}
      <br>
      Diet: {{currentAnimal.diet}}
      <br>
      Cell Block: {{currentAnimal.location}}
      <br>
      Sex: {{currentAnimal.sex}}
      <br>
      Likes: {{currentAnimal.likes}}
      <br>
      Dislikes: {{currentAnimal.dislikes}}
      <br>
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button></div>
    </div>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";

  localColor(currentAnimal){
   if (currentAnimal.location === "Savannah Simulacra"){
     return "bg-warning";
   } else if (currentAnimal.location === "Plastic Jungle") {
     return  "bg-success";
   } else {
     return "bg-primary";
   }
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
