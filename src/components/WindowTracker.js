import React from "react"

export default function WindowTracker() {

    const [wsize, setWsize] = React.useState(window.innerWidth)

    React.useEffect(
        () => {
            //this code runs only one time after rendering component
            function watchWidth() {
                console.log("Updating...")
                setWsize(window.innerWidth)
            }

            //adding an event listener
            window.addEventListener("resize", watchWidth)

            //the return function only runs when a component is dismounted
            return function() {
                console.log("Cleaning after dismounting WindowTracker...")
                window.removeEventListener("resize", watchWidth)
            }
        }, []
    )

        return (
            <h1 className="tracker--h1">Window width: {wsize}</h1>
        )
}


