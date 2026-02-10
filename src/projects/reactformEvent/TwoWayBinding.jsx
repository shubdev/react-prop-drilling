import React from 'react'

const TwoWayBinding = () => {

    let [formData, setFormData] = useState({ name: "shub", email: "shub@gmail.com", number: "1234567" })

    console.log("formdata....", formData);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("tedxt stream feature");

    }
    return (
        <>

            {/* State to UI (One-way binding): The value attribute of a form element is bound to a component's state variable. This means that if the state changes, the input field's displayed value automatically updates.
            UI to State (Event handling): An onChange event handler is attached to the input element. When the user types or makes a change, this handler is triggered */}

            <form onSubmit={(e) => {
                handleSubmit(e)
            }}>
                <input type='text'
                    placeholder='name'
                    value={formData.name}   // two way binding 
                    onChange={(event) => {
                        setFormData({ ...formData, name: event.target.value })
                        console.log("input", event)
                    }} /><br />

                <input type='eamil'
                    placeholder='email'
                    value={formData.email}
                    onChange={(event) => {
                        setFormData({ ...formData, email: event.target.value })
                    }} /><br />
                <input type='text'
                    placeholder='number'
                    value={formData.number}
                    onChange={(event) => {
                        setFormData({ ...formData, number: event.target.value })
                    }} /><br />

                <button type='submit'>Submit</button>
            </form >


        </>
    )
}

export default TwoWayBinding