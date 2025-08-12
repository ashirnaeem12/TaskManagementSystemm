import { TaskStatus } from "./enum";
import { IUser } from "./IntUser";


export interface ITask {
  id: number;
  title: string;
  description: string;
  assignee: IUser | null;
  status: TaskStatus;
}
