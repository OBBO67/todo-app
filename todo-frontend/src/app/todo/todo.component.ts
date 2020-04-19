import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../models/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  // Inputs allow data to flow into this component
  @Input() todo: Todo;
  @Output() deleteRequest = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit(): void {}

  // raise complete event to the TodolistComponent
  // (unsure if its necessary - does the parent need to know its completed i.e. crossed-off)
  completeTodo(): void {}

  // raise delete event to the TodolistComponent
  deleteTodo(): void {
    console.log("TodoComponent emitting delete event");
    this.deleteRequest.emit(this.todo);
  }
}
