"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, title, description, assignee, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.assignee = assignee;
        this.status = status;
    }
    updateStatus(newStatus) {
        this.status = newStatus;
    }
}
exports.Task = Task;
//# sourceMappingURL=task.js.map