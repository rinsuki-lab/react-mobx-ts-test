import { observable } from "mobx"

export class CountStore {
    @observable count = 0

    addCount() {
        this.count++
    }

    resetCount() {
        this.count = 0
    }
}