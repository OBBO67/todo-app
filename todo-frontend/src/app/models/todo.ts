export class Todo {
  id: number;
  name: string;
  createdDate: string;
  completed: boolean;

  constructor(
    id: number,
    name: string,
    createdDate: string,
    completed: boolean
  ) {
    this.id = id;
    this.name = name;
    this.createdDate = createdDate;
    this.completed = completed;
  }
}
