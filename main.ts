import { fetchUsers, fetchTasks } from "./aysnc";
import { TaskManager } from "./taskManager";
import { TaskStatus } from "./enum";
import { paginate } from "./paginate";

async function main() {

    //  Fetch users and tasks
  const users = await fetchUsers();
  const tasks = await fetchTasks();



// Assign some tasks to users.
  if (users.length < 3 || tasks.length < 5) {
    console.log("Not enough users or tasks to proceed.");
    return;
  }

  users[0].assignTask(tasks[0]);
  users[0].assignTask(tasks[1]);
  users[1].assignTask(tasks[2]);
  users[2].assignTask(tasks[3]);
  users[2].assignTask(tasks[4]);

//  add tasks
  const manager = new TaskManager();
  for (const t of tasks) {
    manager.addTask(t);
  }

//  Filter tasks by status. 


  console.log(" Pending Tasks:", manager.getTasksByStatus(TaskStatus.Pending));
  console.log(" In Progress Tasks:", manager.getTasksByStatus(TaskStatus.InProgress));
  console.log(" Completed Tasks:", manager.getTasksByStatus(TaskStatus.Completed));

 // Filter tasks by user. 
  const userId = users[0].id;
  console.log(` Tasks assigned to ${users[0].name}:`, manager.getTasksByUser(userId));

// • Use paginate to return only 2 tasks per page and log the first page. 

const taskManager = new TaskManager();
const allTasks = taskManager.getAllTasks();
  const paginatedTasks = paginate(allTasks, 2, 1); 
  console.log(' Paginated Tasks :', paginatedTasks);

}

main();


 


