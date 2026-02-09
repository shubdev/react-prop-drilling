import React, { useState } from 'react'

function UserInfo({ data, fn }) {
    const [message, setMessage] = useState("")
    // console.log("Component UserInfo Render")
    console.log(message);

    return (
        <>
            <div style={{ border: "10px solid red", padding: "10px", margin: "10px", height: "30vh", width: "75%", background: `${message && "yellow"}`, color: "black" }}>

                <div>UserInfo Render</div>
                <div>name: {data.name}</div>
                <div>email: {data.email}</div>
                <div>role: {data.role}</div>
                <button onClick={() => setMessage(fn())} style={{ background: "red", color: "black" }}>Click me</button>

                <p>{message}</p>
            </div>
        </>
    )
}

export default UserInfo