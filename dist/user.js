"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    assignTask(task) {
        task.assignee = this;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map