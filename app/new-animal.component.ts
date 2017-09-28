import { Component, Output, EventEmitter }  from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="row">
    <h1>New Animal</h1>
    <div class="col-md-6">
      <label>Enter Animal Species:</label>
      <br>
      <input #newSpecies>
      <br>
      <br>
      <label>Enter Animal Name:</label>
      <br>
      <input #newName>
      <br>
      <br>
      <label>Enter Animal Age:</label>
      <br>
      <input #newAge>
      <br>
      <br>
      <label>Enter Animal Diet:</label>
      <br>
      <input #newDiet>
      <br>
      <br>
    </div>
    <div class="col-md-6">
      <label>Enter Animal Location:</label>
      <br>
      <input #newLocation>
      <br>
      <br>
      <label>Enter Animal Sex:</label>
      <br>
      <input #newSex>
      <br>
      <br>
      <label>Enter Animal Likes:</label>
      <br>
      <input #newLikes>
      <br>
      <br>
      <label>Enter Animal Dislikes:</label>
      <br>
      <input #newDislikes>
    </div>
    <br>
    <br>
    <br>
    <br>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, sex: string, likes: string, dislikes: string){
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
