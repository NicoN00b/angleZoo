"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_model_1 = require("./animal.model");
var AppComponent = (function () {
    function AppComponent() {
        // currentAnimal: string = 'Elephant in a Box';
        this.currentTime = new Date();
        this.month = this.currentTime.getMonth() + 1;
        this.day = this.currentTime.getDate();
        this.year = this.currentTime.getFullYear();
        this.masterAnimalList = [
            new animal_model_1.Animal("Elephant", "Mel", 35, "Herbivore", "Savannah Simulacra", "Male", "dreaming about Africa", "flashes and gawking yokels"),
            new animal_model_1.Animal("Ocelet", "Isis", 12, "Carnivore", "Plastic Jungle", "Female", "stalking, torturing, feasting", "pretty much everyone and everything"),
            new animal_model_1.Animal("Osprey", "Gunner", 5, "Carnivore", "Net Tent", "Male", "Diving for Salmon", "The Net that surrounds him"),
        ];
        this.selectedAnimal = null;
    }
    AppComponent.prototype.finishedEditing = function () {
        this.selectedAnimal = null;
    };
    AppComponent.prototype.editAnimal = function (clickedAnimal) {
        this.selectedAnimal = clickedAnimal;
    };
    AppComponent.prototype.addAnimal = function (newAnimalFromChild) {
        this.masterAnimalList.push(newAnimalFromChild);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n    <div class=\"container\">\n      <h1>Animal Prison</h1>\n      <h3>{{month}}/{{day}}/{{year}}</h3>\n\n      <animal-list [childAnimalList]=\"masterAnimalList\" (clickSender)=\"editAnimal($event)\"></animal-list>\n      <edit-animal [childSelectedAnimal]=\"selectedAnimal\" (doneButtonClickedSender)=\"finishedEditing\"></edit-animal>\n      <new-animal (newAnimalSender)=\"addAnimal($event)\"></new-animal>\n    </div>\n  "
    })
    //Add eventBinding that shows picture and detail when mouseover occurs
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map