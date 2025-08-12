
import { User } from "./user";
export async function fetchUsers(): Promise<User[]> {
  return [
    new User(1, "Ashir", "ashir@12.com"),
    new User(2, "Ali", "ali22@.com"),
    new User(3, "Ahmad", "ahmad121@.com")
  ];
}