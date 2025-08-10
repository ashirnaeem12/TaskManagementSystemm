import { Task } from "./task";
import { TaskStatus } from "./enum";

export class TaskManager {
  private tasks: Task[] = [];

  addTask(task: Task) {
    this.tasks.push(task);
  }

  getTasksByStatus(status: TaskStatus): Task[] {
    return this.tasks.filter(task => task.status === status);
  }

  getTasksByUser(userId: number): Task[] {
    return this.tasks.filter(task => task.assignee?.id === userId);
  }

  findTask(id: string | number): Task | undefined {
    if (typeof id === "string") {
      id = parseInt(id);
    }
    return this.tasks.find(task => task.id === id);
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
