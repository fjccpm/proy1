import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App(props) {

    const [darkMode, setDarkMode] = React.useState(props.darkMode)

    function toggleDarkMode() {
        setDarkMode(prev => !prev)
    }

    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}