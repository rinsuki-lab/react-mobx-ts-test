import { observable } from "mobx"

interface Todo {
    id: number
    text: string
}

export class TodoStore {
    @observable todos: Todo[] = []

    addTodo(todo: Todo) {
        this.todos.push(todo)
    }

    removeTodo(todo: Todo) {
        this.todos = this.todos.filter(t => todo.id != t.id)
    }
}