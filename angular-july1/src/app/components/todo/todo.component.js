"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoComponent = void 0;
var core_1 = require("@angular/core");
var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
        this.todoItems = [];
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent.prototype.addItem = function () {
        var todoItem = {
            completed: false,
            task: 'new task'
        };
        this.todoItems.push(todoItem);
    };
    TodoComponent.prototype.itemClicked = function (item) {
        console.log(item);
        item.completed = !item.completed;
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'app-todo',
            templateUrl: './todo.component.html',
            styleUrls: ['./todo.component.css']
        })
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
