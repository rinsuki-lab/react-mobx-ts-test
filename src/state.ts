import { CountStore } from "./states/count";
import { TodoStore } from "./states/todo";

var state = {
    count: new CountStore,
    todo: new TodoStore,
}

export default state