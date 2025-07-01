import { useState } from "react"
function Greeting() {
    let [loggedIn, setLoggedIn] = useState(false)

    //     if(loggedIn) {
    //         return(
    //           <>
    //             <h2>welcome</h2>
    //             <button>log out</button>
    //           </>
    //     )
    // }
    // else{
    //     return <button>login</button>
    // }
    return (
        // turnary operator
        <>
        {
            (loggedIn) ? <button>log out</button>: <button>Login</button>
        }

            <p>{(loggedIn) && "welcome"}</p>
        </>
    )
}
export default Greeting