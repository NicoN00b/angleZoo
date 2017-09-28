"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AnimalAgePipe = (function () {
    function AnimalAgePipe() {
    }
    AnimalAgePipe.prototype.transform = function (input, filterByAge) {
        var output = [];
        if (filterByAge === "seniorCitizen") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].age >= 20) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (filterByAge === "youngGun") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].age < 20) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else {
            return input;
        }
    };
    return AnimalAgePipe;
}());
AnimalAgePipe = __decorate([
    core_1.Pipe({
        name: "animalage",
        pure: false
    })
], AnimalAgePipe);
exports.AnimalAgePipe = AnimalAgePipe;
//# sourceMappingURL=animal-age.pipe.js.map