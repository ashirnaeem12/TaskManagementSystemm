import { IUser } from "./interface";
import { Task } from "./task";
export declare class User implements IUser {
    id: number;
    name: string;
    email: string;
    constructor(id: number, name: string, email: string);
    assignTask(task: Task): void;
}
