import { User } from "./user";

export class Todo {
  id: number;
  name: string;
  createdDate: string;
  completed: boolean;
  user: User;

  constructor(
    id: number,
    name: string,
    createdDate: string,
    completed: boolean,
    user: User
  ) {
    this.id = id;
    this.name = name;
    this.createdDate = createdDate;
    this.completed = completed;
    this.user = user;
  }
}
