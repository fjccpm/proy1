import React from "react";

export default function Box(props) {
    

    //const [box, setBox] = React.useState([props.id, props.on])

    const styles = {
        backgroundColor: props.on ? "#222222" : "#cccccc"
    }

    /*function handleClick() {
        setBox(prev => [prev[0], !prev[1]])
        console.log("click box")
    }*/

    return (
        <div className="box" style={styles} key={props.id} onClick={() => props.toggle(props.id)}>
            <p className="box--text">{props.id}</p>
        </div>
        )
}