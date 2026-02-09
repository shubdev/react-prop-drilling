import React, { useState } from 'react'

export const CounterCard = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }
    const handleDecrement = () => {
        setCounter(counter - 1);
        if (counter == 0) {
            setCounter(0);
        }
    }
    const handleReset = () => {
        setCounter(0);
    }
    return (
        <>
            <div>
                <h2>Counter Card</h2>
                <h2>{counter}</h2>
                <div style={{ display: "flex", gap: "10px", }}>
                    <button style={{ border: "none", cursor: "pointer", backgroundColor: "#2b7fff", color: "white", padding: "10px", borderRadius: "5px" }}
                        onClick={handleIncrement}
                    > +</button>
                    <button style={{ border: "none", backgroundColor: "#fb2c36", color: "white", padding: "10px", borderRadius: "5px" }}
                        onClick={handleDecrement}
                    >-</button>
                    <button style={{ border: "none", backgroundColor: "#6a7282", color: "white", padding: "10px", borderRadius: "5px" }}
                        onClick={handleReset}
                    >Reset</button>

                </div>
            </div>
        </>
    )
}
