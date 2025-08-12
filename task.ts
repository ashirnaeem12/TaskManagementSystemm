import { ITask } from "./IntTask";
import { TaskStatus } from "./enum";
import { IUser } from "./IntUser";

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
