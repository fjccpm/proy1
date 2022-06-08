import React from "react";


export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: false
    })

    console.log(formData)

    function handleChange(event)
    {
        const {name, type, value, checked} = event.target
        setFormData(prevFormData =>
            (
                {
                    ...prevFormData,
                    [name]: type==="checkbox" ? checked : value
                }
            ))
    }
    
    return(
        <form>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <textarea
                    placeholder="Comments"
                    onChange={handleChange}
                    name="comments"
                    value={formData.comments}
                />
                <input
                    type="checkbox"
                    id="isFriendly"
                    checked={formData.isFriendly}
                    name="isFriendly"
                    onChange={handleChange}
                />
                <label htmlFor="isFriendly">Are you Friendly?</label>
            </form>
    )
}
