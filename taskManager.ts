import { Task } from "./task";
import { TaskStatus } from "./enum";

export class TaskManager {

    task: Task[] = []; 
  addTask(task: Task): void {
    this.task.push(task);
  }

  getAllTasks(): Task[] {
    return this.task;
  }



getTasksByStatus(status: TaskStatus): Task[] {
    const otasks: Task[] = []
    for (const t of this.task) {
        if (status === TaskStatus.Pending && t.status === TaskStatus.Pending) {
            otasks.push(t)
        } else if (status === TaskStatus.InProgress && t.status === TaskStatus.InProgress) {
            otasks.push(t)
        } else if (status === TaskStatus.Completed && t.status === TaskStatus.Completed) {
            otasks.push(t)
        }
    }
    return otasks;
}



   getTasksByUser(userId: number): Task[] {
    const otasks: Task[] = []
      for (const t of this.task){
        if(userId ===t.assignee?.id){       
            otasks.push(t)
        }
    }
     return otasks
   }


findTask(id: string | number): Task | undefined {
  for (const t of this.task) {
    if (typeof id === 'number' && t.id === id) {
      return t; 
    } else if (typeof id === 'string') {
      const convertedId = parseInt(id);
      if (t.id === convertedId) {
        return t; 
      }
    }
  }
  return undefined;
}
}

function paginate<T>(items: T[], pageSize: number, pageNumber: number): T[] {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedItems: T[] = [];

  for (let i = startIndex; i < endIndex && i < items.length; i++) {
    paginatedItems.push(items[i]);
  }

  return paginatedItems;
}


