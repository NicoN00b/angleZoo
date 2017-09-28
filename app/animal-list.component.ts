import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="container-fluid">
    <div id="item">
      <p [class]="localColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.species}}<br>
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
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button></p>
    </div>
  </div>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

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
}
