import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App(props) {
    return (
        <div className="container">
            <Navbar />
            <Main darkMode={props.darkMode}/>
        </div>
    )
}