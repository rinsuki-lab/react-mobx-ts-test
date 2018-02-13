import * as React from "react"
import Counter from "./counter";

export default class App extends React.Component {
    render() {
        return <div>
            <h1>Hello, world!</h1>
            <Counter />
            <Counter />
        </div>
    }
}