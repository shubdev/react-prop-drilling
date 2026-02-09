import React, { useState } from 'react'

export const VisibilityCArd = () => {

    const [hide, setHide] = useState(false);
    return (
        <>
            <div>
                <h2>Visibility Card</h2>
                <button style={{ border: "none", padding: "15px", borderRadius: "8px", color: "white",cursor:"pointer", backgroundColor: `${hide == true ? ("#00c950") : ("#fb2c36")}` }}
                    onClick={() => setHide(!hide)}
                >{hide == true ? ("Show Message") : ("Hide Message")}</button>
                {
                    hide == true ? ("") : (
                        <div style={{ padding: "2px", marginTop: "15px", backgroundColor: "#eff6ff", border: "2px solid #eff6ff", borderRadius: "6px", }}><p style={{ color: "blue" }}>🚀 This message is controlled by useState boolean value.</p></div>
                    )
                }
            </div>

        </>
    )
}
