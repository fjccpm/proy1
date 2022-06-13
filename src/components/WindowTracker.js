import React from "react"

export default function WindowTracker(props) {

    const [wsize, setWsize] = React.useState(window.innerWidth)

    React.useEffect(
        () => {
            window.addEventListener("resize", function() {
                setWsize(window.innerWidth)
            })
        }, []
    )

    if(props.tracker) {
        return (
            <h1 classname="tracker--h1">Window width: {wsize}</h1>
        )
    }
    else
    {
        return ""
    }
}


