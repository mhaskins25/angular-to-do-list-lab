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
  keyword: string = "";
  todo: Todo[] = [
    { task: 'fold clothes', completed: false },
    { task: 'put clothes in dresser', completed: false },
    { task: 'relax', completed: false },
    { task: 'try to pet a cat', completed: true },
    { task: 'pet a dog', completed: false },
    { task: 'be awesome', completed: false },
  ];

  styles = {
    "text-decoration": "line-through"
  }

  removeTask(index: number){
    this.todo.splice(index,1)
  }

  completeTask(index: number){
    this.todo[index].completed = true;
  }

  addTask(index: number){
    this.todo[index].completed = false;
  }




  constructor() { }

  ngOnInit(): void {
  }

}
