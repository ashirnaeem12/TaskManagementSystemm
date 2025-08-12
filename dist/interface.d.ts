import { TaskStatus } from "./enum";
export interface IUser {
    id: number;
    name: string;
    email: string;
}
export interface ITask {
    id: number;
    title: string;
    description: string;
    assignee: IUser | null;
    status: TaskStatus;
}
