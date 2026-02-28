import React, { useState } from 'react'

const Parent = () => {

    const [count, setCount] = useState(0);


    const Increase = () => {
        setCount(count + 1);
    }
    return (
        <>
            <div>
                <h1>Performance Optimization in React</h1>
                <button onClick={Increase}>Incease count</button>
            </div>
        </>
    )
}

export default Parent