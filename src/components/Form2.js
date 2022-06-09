import React from "react";

export default function Form2() {
    
    const [loginData, setLoginData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinNewsLetter: true
    })

    function handleSubmit(event) {
        event.preventDefault()
        if(loginData.password===loginData.passwordConfirm)
        {
            console.log("Sign in Succesfully!!!" + 
            (loginData.joinNewsLetter ? " Thanks for suscribing to newsLetter" : ""))
        }
        else
        {
            console.log("Passwords don´t match!")
        }
    }

    function handleChange(event)
    {
        const {name, type, value, checked} = event.target
        setLoginData(prevFormData =>
            (
                {
                    ...prevFormData,
                    [name]: type==="checkbox" ? checked : value
                }
            ))
    }
    
    return(
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConfirm"
                    value={loginData.passwordConfirm}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={loginData.joinNewsLetter}
                        name="joinNewsLetter"
                        onChange={handleChange}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}