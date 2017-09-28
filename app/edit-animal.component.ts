import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <div class="row">
        <h2>{{childSelectedAnimal.species}} {{childSelectedAnimal.name}}</h2>
        <h2>Edit Info</h2>
        <div class="col-md-6">
          <label>Enter Animal Species:</label>
          <br>
          <br>
          <input [(ngModel)]="childSelectedAnimal.species">
          <br>
          <br>
          <label>Enter Animal Name:</label>
          <br>
          <br>
          <input [(ngModel)]="childSelectedAnimal.name">
          <br>
          <br>
          <label>Enter Animal Age:</label>
          <br>
          <br>
          <input [(ngModel)]="childSelectedAnimal.age">
          <br>
          <br>
          <label>Enter Animal Diet:</label>
          <br>
          <br>
          <input [(ngModel)]="childSelectedAnimal.diet">
          <br>
        </div>
        <div class="col-md-6">
          <label>Enter Animal Location:</label>
          <br>
          <br>
          <input [(ngModel)]="childSelectedAnimal.location">
          <br>
          <br>
          <label>Enter Animal Sex:</label>
          <br>
          <br>
          <input [(ngModel)]="childSelectedAnimal.sex">
          <br>
          <br>
          <label>Enter Animal Likes:</label>
          <br>
          <br>
          <input [(ngModel)]="childSelectedAnimal.likes">
          <br>
          <br>
          <label>Enter Animal Dislikes:</label>
          <br>
          <br>
          <input [(ngModel)]="childSelectedAnimal.dislikes">
          <br>
        </div>
        <button (click)="doneButtonClicked()">Finish and Save</button>
      </div>
      <br>
      <br>
      <br>
    </div>
  <div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
