"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const enum_1 = require("./enum");
class TaskManager {
    constructor() {
        this.task = [];
    }
    addTask(task) {
        this.task.push(task);
    }
    getAllTasks() {
        return this.task;
    }
    getTasksByStatus(status) {
        const otasks = [];
        for (const t of this.task) {
            if (status === enum_1.TaskStatus.Pending && t.status === enum_1.TaskStatus.Pending) {
                otasks.push(t);
            }
            else if (status === enum_1.TaskStatus.InProgress && t.status === enum_1.TaskStatus.InProgress) {
                otasks.push(t);
            }
            else if (status === enum_1.TaskStatus.Completed && t.status === enum_1.TaskStatus.Completed) {
                otasks.push(t);
            }
        }
        return otasks;
    }
    getTasksByUser(userId) {
        var _a;
        const otasks = [];
        for (const t of this.task) {
            if (userId === ((_a = t.assignee) === null || _a === void 0 ? void 0 : _a.id)) {
                otasks.push(t);
            }
        }
        return otasks;
    }
    findTask(id) {
        for (const t of this.task) {
            if (typeof id === 'number' && t.id === id) {
                return t;
            }
            else if (typeof id === 'string') {
                const convertedId = parseInt(id);
                if (t.id === convertedId) {
                    return t;
                }
            }
        }
        return undefined;
    }
}
exports.TaskManager = TaskManager;
function paginate(items, pageSize, pageNumber) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedItems = [];
    for (let i = startIndex; i < endIndex && i < items.length; i++) {
        paginatedItems.push(items[i]);
    }
    return paginatedItems;
}
//# sourceMappingURL=taskManager.js.map