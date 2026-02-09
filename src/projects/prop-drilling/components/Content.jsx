import React from 'react'
import ProfileCard from './ProfileCard'

function Content({ data, fn }) {
    console.log("Component Content Render")
    return (
        <>
            <div style={{ border: "10px solid red", marginLeft: "30%", margintop: "30%", margin: "10px", height: "50vh", width: "80%" }}>

                <div>Content</div>
                <ProfileCard data={data} fn={fn} />
            </div>
        </>
    )
}

export default Content