"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const aysnc_1 = require("./aysnc");
const taskManager_1 = require("./taskManager");
const enum_1 = require("./enum");
const paginate_1 = require("./paginate");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield (0, aysnc_1.fetchUsers)();
        const tasks = yield (0, aysnc_1.fetchTasks)();
        if (users.length < 3 || tasks.length < 5) {
            console.log("Not enough users or tasks to proceed.");
            return;
        }
        users[0].assignTask(tasks[0]);
        users[0].assignTask(tasks[1]);
        users[1].assignTask(tasks[2]);
        users[2].assignTask(tasks[3]);
        users[2].assignTask(tasks[4]);
        const manager = new taskManager_1.TaskManager();
        for (const t of tasks) {
            manager.addTask(t);
        }
        console.log(" Pending Tasks:", manager.getTasksByStatus(enum_1.TaskStatus.Pending));
        console.log(" In Progress Tasks:", manager.getTasksByStatus(enum_1.TaskStatus.InProgress));
        console.log(" Completed Tasks:", manager.getTasksByStatus(enum_1.TaskStatus.Completed));
        for (const user of users) {
            const userTasks = manager.getTasksByUser(user.id);
            console.log(`Tasks assigned to ${user.name}:`, userTasks);
        }
        const taskManager = new taskManager_1.TaskManager();
        const allTasks = taskManager.getAllTasks();
        const paginatedTasks = (0, paginate_1.paginate)(allTasks, 2, 1);
        console.log(' Paginated Tasks :', paginatedTasks);
    });
}
main();
//# sourceMappingURL=main.js.map