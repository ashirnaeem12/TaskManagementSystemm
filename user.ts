import { IUser } from "./IntUser";
import { Task } from "./task";

export class User implements IUser {
  constructor(public id: number, public name: string, public email: string) {}

  assignTask(task: Task) {
    task.assignee = this;
  }
}
