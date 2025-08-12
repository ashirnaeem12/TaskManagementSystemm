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
exports.fetchUsers = fetchUsers;
exports.fetchTasks = fetchTasks;
const task_1 = require("./task");
const enum_1 = require("./enum");
const user_1 = require("./user");
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return [
            new user_1.User(1, "Ashir", "ashir@12.com"),
            new user_1.User(2, "Ali", "ali22@.com"),
            new user_1.User(3, "Ahmad", "ahmad121@.com")
        ];
    });
}
function fetchTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        return [
            new task_1.Task(1, "Html", "HyperTextMarkUpLanguage", null, enum_1.TaskStatus.Pending),
            new task_1.Task(2, "CSS", "CascadingStyleSheet", null, enum_1.TaskStatus.InProgress),
            new task_1.Task(3, "JS", "JavaScript", null, enum_1.TaskStatus.Completed),
            new task_1.Task(4, "react", "React.JS", null, enum_1.TaskStatus.Pending),
            new task_1.Task(5, "TS", "TypeScript", null, enum_1.TaskStatus.InProgress)
        ];
    });
}
//# sourceMappingURL=aysnc.js.map