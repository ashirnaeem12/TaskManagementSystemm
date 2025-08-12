import { Task } from "./task";
import { TaskStatus } from "./enum";



export async function fetchTasks(): Promise<Task[]> {
  return [
    new Task(1, "Html", "HyperTextMarkUpLanguage", null, TaskStatus.Pending),
    new Task(2, "CSS", "CascadingStyleSheet", null, TaskStatus.InProgress),
    new Task(3, "JS", "JavaScript", null, TaskStatus.Completed),
    new Task(4, "react", "React.JS", null, TaskStatus.Pending),
    new Task(5, "TS", "TypeScript", null, TaskStatus.InProgress)
  ];
}
