import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoItems: TodoItem[];
  value: string;
  filterInput: string;
  filteredTodos: TodoItem[];

  ngOnInit() {
    this.todoItems = [
      { task: 'Clean up the carpet stains', completed: false },
      { task: 'Clean the dishes', completed: false },
      { task: 'Do laundry', completed: true },
      { task: 'Put the cat out', completed: true },
    ];

    this.filteredTodos = this.todoItems;
  }

  addItem() {
    const newTodoItem: TodoItem = {
      completed: false,
      task: this.value,
    };
    this.todoItems.push(newTodoItem);
  }

  itemClicked(item: TodoItem) {
    console.log(item);
    item.completed = !item.completed;
  }

  removeItem(item: TodoItem): void {
    const itemIndex = this.todoItems.indexOf(item);
    this.todoItems.splice(itemIndex, 1);
  }

  filter() {
    if (!this.filterInput) {
      return this.todoItems;
    }
    return this.todoItems.filter(todo => todo.task.includes(this.filterInput));
  }
}
