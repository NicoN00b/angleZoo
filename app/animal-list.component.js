"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AnimalListComponent = (function () {
    function AnimalListComponent() {
        this.clickSender = new core_1.EventEmitter();
    }
    AnimalListComponent.prototype.localColor = function (currentAnimal) {
        if (currentAnimal.location === "Savannah Simulacra") {
            return "bg-warning";
        }
        else if (currentAnimal.location === "Plastic Jungle") {
            return "bg-success";
        }
        else {
            return "bg-primary";
        }
    };
    AnimalListComponent.prototype.editButtonHasBeenClicked = function (animalToEdit) {
        this.clickSender.emit(animalToEdit);
    };
    return AnimalListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AnimalListComponent.prototype, "childAnimalList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnimalListComponent.prototype, "clickSender", void 0);
AnimalListComponent = __decorate([
    core_1.Component({
        selector: 'animal-list',
        template: "\n  <div class=\"container-fluid\">\n    <div id=\"item\">\n      <p [class]=\"localColor(currentAnimal)\" *ngFor=\"let currentAnimal of childAnimalList\">{{currentAnimal.species}}<br>\n      {{currentAnimal.name}}\n      <br>\n      Age: {{currentAnimal.age}}\n      <br>\n      Diet: {{currentAnimal.diet}}\n      <br>\n      Cell Block: {{currentAnimal.location}}\n      <br>\n      Sex: {{currentAnimal.sex}}\n      <br>\n      Likes: {{currentAnimal.likes}}\n      <br>\n      Dislikes: {{currentAnimal.dislikes}}\n      <br>\n      <button (click)=\"editButtonHasBeenClicked(currentAnimal)\">Edit!</button></p>\n    </div>\n  </div>\n\n  "
    })
], AnimalListComponent);
exports.AnimalListComponent = AnimalListComponent;
//# sourceMappingURL=animal-list.component.js.map