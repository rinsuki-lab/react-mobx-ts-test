import * as React from "react"
import { observer } from "mobx-react"
import state from "../state"

@observer
export default class Counter extends React.Component{
    render() {
        return <div>
            Counter: <span>{state.count.count}</span>
            <button onClick={() => {state.count.addCount()}}>add</button>
            <button onClick={() => {state.count.resetCount()}}>reset</button>
        </div>
    }
}