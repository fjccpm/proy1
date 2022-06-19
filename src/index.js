import React from "react"
//import ReactDOM from "react-dom"
import App from "./App"
import "./style.css"
import {createRoot} from "react-dom/client"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App darkMode={true}/>)
//ReactDOM.render(<App darkMode={false}/>, container)