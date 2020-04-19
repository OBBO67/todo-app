import { Component, OnInit } from "@angular/core";
import { TodoService } from "../services/todo.service";
import { Todo } from "../models/todo";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"],
})
export class TodolistComponent implements OnInit {
  todo1 = new Todo(1, "Test 1", Date(), false); // fake data
  todo2 = new Todo(2, "Test 2", Date(), false); // fake data
  todos: Todo[];
  todoForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = "";

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {
    this.todos = [];
  }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      todoName: [""],
    });
    this.todos.push(this.todo1, this.todo2); // fake data
  }

  get todoNameGroup(): FormGroup {
    return this.todoForm.controls.todoName as FormGroup;
  }

  getAllTodos(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  addTodo(): void {
    this.submitted = true;

    if (this.todoForm.invalid) {
      return;
    }
  }

  deleteEvent(todo: Todo) {
    console.log(`Parent says: deleting ${todo}`);
    this.todos = this.todos.filter((t) => {
      return t.id !== todo.id;
    });

    // then send delete request to server
  }

  onSubmit(): void {
    // send request to server
  }
}
