import React from "react"
import memesData from "../memesData.js"

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
            setIsImportant(prev => prev==="Yes" ? "No" : "Yes")
    }

    const [counter, setCounter] = React.useState(0)

    function handleMinus() {
        setCounter(prev => prev-1)
    }

    function handlePlus() {
        setCounter(prev => prev+1)
    }

    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    function addItem() {
        setThingsArray(prev => [...prev, "Thing "+(prev.length+1)])
    }


    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = 
        contact.isFavorite ? 
            require("../images/star-filled.png") : 
            require("../images/star-empty.png")

    function toggleFavorite() {
        setContact(
            prev => ( {
                    ...prev,
                    isFavorite: !prev.isFavorite
                }
            )
        )
        console.log("Toggle Favorite")
    }



    //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prev => (
            {...prev,
                randomImage: url
            }
            )
        )
        
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
                <li>Prueba con Fabio de Pull Request</li>
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
            
            <br></br><br></br><br></br><br></br>
            <div>
                <button className="button--add" onClick={addItem}>Add Item</button>
                {thingsElements}
            </div>

            <br></br><br></br><br></br><br></br>
            <article className="card">
                <img src={require("../images/user.png")} className="card--image" alt="" />
                <div className="card--info">
                    <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                        alt=""/>
                    <h2 className="card--name">
                        {contact.firstName + " " + contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>

            <br></br><br></br><br></br><br></br>
            <img 
                src={require("../images/troll-face.png")} 
                className="header--image"
                alt=""
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" alt="" />
        
        </main>
    )
}