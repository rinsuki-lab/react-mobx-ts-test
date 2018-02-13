import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./components/app"

addEventListener("load", () => {
    const root = document.getElementById("root")
    ReactDOM.render(<App />, root)
})