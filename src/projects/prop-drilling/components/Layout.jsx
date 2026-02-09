import React from 'react'
import Sidebar from './Sidebar'

function Layout({ data, fn }) {
    console.log("Component Layout Render")
    return (
        <>
            <div style={{ border: "10px solid red", padding: "10px", margin: "10px", height: "70vh", width: "90%" }}>
                <div>Layout</div>
                <Sidebar data={data} fn={fn} />
            </div>
        </>
    )
}

export default Layout