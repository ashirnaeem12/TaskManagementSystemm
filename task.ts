import { ITask } from "./interface";
import { TaskStatus } from "./enum";
import { IUser } from "./interface";

export class Task implements ITask {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public assignee: IUser | null,
    public status: TaskStatus
  ) {}

  updateStatus(newStatus: TaskStatus) {
    this.status = newStatus;
  }
}
