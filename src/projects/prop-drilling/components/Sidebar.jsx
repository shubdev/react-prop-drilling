import React from 'react'
import Content from './Content'

function Sidebar({ data, fn }) {

    console.log("Component Sidebar Render")
    return (
        <>
            <div style={{ border: "10px solid red", marginLeft: "30%", marginTop: "15%", margin: "10px", height: "60vh", width: "80%" }}>

                <div>Sidebar</div>
                <Content data={data} fn={fn} />
            </div>
        </>
    )
}

export default Sidebar