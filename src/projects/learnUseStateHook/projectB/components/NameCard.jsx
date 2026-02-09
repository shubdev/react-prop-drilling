import React, { useState } from 'react'

export const NameCard = () => {

    const [name, setName] = useState("Sunny😉")
    return (
        <>
            <div>
                <h2>Name Card</h2>
                <h2>{name}</h2>
                <button onClick={() => setName("FootBaller⚽")} style={{ border: "none", cursor: "pointer", backgroundColor: "#00c950", color: "white", padding: "15px", borderRadius: "5px", }}>Change Name</button>
            </div>

        </>
    )
}
