import * as React from "react"
import state from "../state"
import { observer } from "mobx-react";

interface State {

}

@observer
export default class Todo extends React.Component<{}, State> {
    render() {
        return <div>
            <form onSubmit={e => this.createTodo(e)}>
                <input type="text" name="text"/>
                <button type="submit">Add</button>
            </form>
            <ol>
                {state.todo.todos.map(todo => <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => state.todo.removeTodo(todo)}>Del</button>
                </li>)}
            </ol>
        </div>
    }

    createTodo(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const text = formData.get("text") as string
        state.todo.addTodo({
            id: Date.now(),
            text
        })
    }
}