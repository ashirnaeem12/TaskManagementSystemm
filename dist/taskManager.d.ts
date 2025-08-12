import { Task } from "./task";
import { TaskStatus } from "./enum";
export declare class TaskManager {
    task: Task[];
    addTask(task: Task): void;
    getAllTasks(): Task[];
    getTasksByStatus(status: TaskStatus): Task[];
    getTasksByUser(userId: number): Task[];
    findTask(id: string | number): Task | undefined;
}
