import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "../models/todo";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  constructor(private http: HttpClient) {}

  // get all todos
  getTodos(): Observable<any> {
    return this.http.get("http://localhost:8080/api/todos");
  }

  // get single todo by id
  getTodo(id: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/todos/${id}`);
  }

  // create a new todo
  addTodo(todo: Todo): Observable<any> {
    return this.http.post("http://localhost:8080/api/todos", todo);
  }

  // update a todo
  updateTodo(id: String, todo: Todo): Observable<any> {
    return this.http.put(`http://localhost:8080/api/todos/${id}`, todo);
  }

  // delete a todo
  deleteTodo(id: String): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/todos/${id}`);
  }
}
