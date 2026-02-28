import React from 'react'

const Child1 = ({ Increase }) => {
    console.log("child 1 is rerendering...");

    return (
        <>
            <div>Child1</div>
            <button onClick={Increase}>Incease count</button>
        </>
    )
}
//state to update ho rahi hay per childeren component re-render nahi ho raha. becouse of react.memo.
//react check karta hay ki propes change ho rahi hay ya nahi if ho rahi hay to hi child component re render ho verna na ho.
export default React.memo(Child1)