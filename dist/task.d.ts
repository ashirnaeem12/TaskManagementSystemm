import { ITask } from "./interface";
import { TaskStatus } from "./enum";
import { IUser } from "./interface";
export declare class Task implements ITask {
    id: number;
    title: string;
    description: string;
    assignee: IUser | null;
    status: TaskStatus;
    constructor(id: number, title: string, description: string, assignee: IUser | null, status: TaskStatus);
    updateStatus(newStatus: TaskStatus): void;
}
