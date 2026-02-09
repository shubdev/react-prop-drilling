import React, { useState } from 'react'

export const UserCard = () => {

    const [user, setUser] = useState({ name: "Sunny", role: "Student" })
    return (
        <>
            <div>
                <h2>User Card</h2>
                <p>Name: {user.name}</p>
                <p>Role: {user.role}</p>
                <button style={{ border: "none", padding: "15px", borderRadius: "10px", backgroundColor: "#f0b100", cursor: "pointer", }}
                    onClick={() => setUser({ name: "Sunny", role: "Developer" })}
                >Promote to dveloper</button>
            </div>

        </>)
}
