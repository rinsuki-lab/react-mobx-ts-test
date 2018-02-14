import { observable } from "mobx"

export class CountStore {
    @observable count = 0

    addCount() {
        this.count++
    }

    resetCount() {
        this.count = 0
    }

    async addCountAsync() {
        await (new Promise(r => setTimeout(r, 1000)))
        this.count++
    }
}