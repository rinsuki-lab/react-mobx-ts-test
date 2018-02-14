import * as React from "react"
import Counter from "./counter";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Todo from "./todo";

export default class App extends React.Component {
    render() {
        return <HashRouter><div>
            <h1>React + MobX Test</h1>
            <ul>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/todo">ToDo</Link></li>
            </ul>
            <hr />
            <Switch>
                <Route path="/counter"><div>
                    <h1>Counter</h1>
                    <Counter />
                    <Counter />
                </div></Route>
                <Route path="/todo"><div>
                    <h1>Todo</h1>
                    <Todo />
                </div></Route>
            </Switch>
        </div></HashRouter>
    }
}