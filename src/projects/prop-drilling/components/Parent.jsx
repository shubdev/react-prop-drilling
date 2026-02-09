import React, { useState } from 'react'
import Layout from './Layout';
export const Parent = () => {
    const [user, setUser] = useState({
        name: "shub",
        email: "shub@example.com",
        role: "admin",
    });


    let sayHello = () => {
        return "hey I,m  an arrow function."
    }

    return (
        <>
            <div>
                <div>Parent</div>
                <div>
                    <Layout data={user} fn={sayHello} />
                </div >
            </div>
        </>
    )
}
