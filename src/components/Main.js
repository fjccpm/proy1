import React from "react"

export default function Main() {

    const [isImportant, setIsImportant] = React.useState("Yes")
    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     */
    
    function handleClick() {
        if(isImportant==="Yes") {
            setIsImportant("No")
        }
        else {
            setIsImportant("Yes")
        }
    }

    const [counter, setCounter] = React.useState(0)

    function handleMinus() {
        setCounter(prev => prev-1)
    }

    function handlePlus() {
        setCounter(prev => prev+1)
    }

    return (
        <main>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <br></br><br></br>
            <div className="state">
                <h1 className="state--title">Is state important to know?</h1>
                <div className="state--value" onClick={handleClick}>
                    <h1>{isImportant}</h1>
                </div>
            </div>

            <br></br><br></br><br></br><br></br>
            <div className="counter">
                <button className="counter--minus" onClick={handleMinus}>–</button>
                <div className="counter--count">
                    <h1>{counter}</h1>
                </div>
                <button className="counter--plus" onClick={handlePlus}>+</button>
            </div>
        </main>
    )
}