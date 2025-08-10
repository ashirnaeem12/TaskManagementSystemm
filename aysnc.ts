import { Task } from "./task";
import { TaskStatus } from "./enum";
import { User } from "./user";

export async function fetchUsers(): Promise<User[]> {
  return [
    new User(1, "Ashir", "ashir@12.com"),
    new User(2, "Ali", "ali22@.com"),
    new User(3, "Ahmad", "ahmad121@.com")
  ];
}


export async function fetchTasks(): Promise<Task[]> {
  return [
    new Task(1, "Html", "HyperTextMarkUpLanguage", null, TaskStatus.Pending),
    new Task(2, "CSS", "CascadingStyleSheet", null, TaskStatus.InProgress),
    new Task(3, "JS", "JavaScript", null, TaskStatus.Completed),
    new Task(4, "react", "React.JS", null, TaskStatus.Pending),
    new Task(5, "TS", "TypeScript", null, TaskStatus.InProgress)
  ];
}
