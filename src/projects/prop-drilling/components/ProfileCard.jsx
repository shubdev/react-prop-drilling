import React from 'react'
import UserInfo from './UserInfo'

function ProfileCard({ data, fn }) {
    console.log("Component ProfileCard Render")
    return (
        <>
            <div style={{ border: "10px solid red", marginLeft: "30%", margin: "10px", height: "40vh", width: "70%" }}>

                <div>ProfileCard Render</div>
                <UserInfo data={data} fn={fn} />
            </div>
        </>
    )
}

export default ProfileCard