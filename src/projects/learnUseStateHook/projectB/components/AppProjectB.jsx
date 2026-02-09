import React from 'react'
import { CounterCard } from './CounterCard'
import { NameCard } from './NameCard'
import { UserCard } from './UserCard'
import { VisibilityCArd } from './VisibilityCArd'

export const AppProjectB = () => {


    let card = {
        padding: "50px 20px",
        width: "50%",
        border: "4px solid #ccc",
        boxshadow: "20px",
        borderRadius: "10px",
        backgroundColor: "#070000",
        boder: "none",
        color: "white"
    }

    return (
        <>
            <div style={{ display: "flex", gap: "20px", flexDirection: "column", backgroundColor: "#f3f4f6" }}>
                <div style={{ display: "flex", gap: "20px" }}>
                    <div style={card}><CounterCard /></div>
                    <div style={card}><NameCard /> </div>
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                    <div style={card}><UserCard /> </div>
                    <div style={card}><VisibilityCArd /> </div>
                </div>

            </div>
        </>
    )
}
