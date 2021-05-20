import { Component, Input, OnInit } from '@angular/core';
interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  filter = '';

  
  todo: Todo[] = [
    { task: 'fold clothes', completed: false },
    { task: 'put clothes in dresser', completed: false },
    { task: 'relax', completed: false },
    { task: 'try to pet a cat', completed: true },
    { task: 'pet a dog', completed: false },
    { task: 'be awesome', completed: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
