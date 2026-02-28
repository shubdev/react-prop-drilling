import React, { useState } from 'react'
import Child1 from './Child1';

const OptimizeParent = () => {

    const [count, setCount] = useState(0);


    const Increase = React.useCallback(() => {   //js me object and funtion hay non-primivitve type and its work on reffernce type  so her bar jab bhi button click hota hay to hamesha new reference create karta hay jis wajha se component rerender hota hay to ise fix karne k liye hum usecallback use karte hay.  
        setCount(count => count + 1);
    }, [setCount])

    return (
        <>
            <div style={{ alignItem: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1>Performance Optimization in React</h1>

                <h1>{count}</h1>
                <Child1 Increase={Increase} />
                {/* <button onClick={Increase}>Incease count</button> */}
            </div >
        </>
    )
}

export default OptimizeParent