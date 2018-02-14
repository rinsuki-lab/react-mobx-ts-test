import * as React from "react"
import { observer } from "mobx-react"
import state from "../state"

interface State {
    tmpCount: number
}

@observer
export default class Counter extends React.Component<{}, State>{
    constructor(props: {}) {
        super(props)
        this.state = {
            tmpCount: 0
        }
    }
    render() {
        return <div>
            Counter: <span>{state.count.count + this.state.tmpCount}</span>
            <button onClick={() => {state.count.addCount()}}>add</button>
            <button onClick={() => {state.count.addCountAsync()}}>add async</button>
            <button onClick={() => {state.count.resetCount()}}>reset</button>
            <button onClick={() => this.onClickAsync()}>通信完了前に通信が完了したかのように見せるやつ</button>
        </div>
    }

    async onClickAsync() {
        this.setState({
            tmpCount: this.state.tmpCount + 1
        })
        await state.count.addCountAsync()
        this.setState({
            tmpCount: this.state.tmpCount - 1
        })
    }
}