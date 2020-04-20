import { Todo } from "./todo";

export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  todos: Todo[];
  token?: string; // optional
}
