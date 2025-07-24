import { useState } from "react"
import "./login.css"
 
function Login() {
    const [userProfile, setUserProfile] = useState({
           email: "",
           password: ""
      })
     
    function handleInput(e){
    
    setUserProfile(prev=>
    ({...prev,[e.target.name]: e.target.value})    
    )
 }
  

 function handleLogin(e){
    e.preventDefault()
    console.log(userProfile)
    setUserProfile({
        email:"",
        password:""
    })
    
 }

    return (
        <div className="login">
            <div className="container">
                <div className="right">
                    <h2 className="form-title">Login</h2>
                    <form method="post" onSubmit={handleLogin}>
                        <input
                            className="form-input"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={userProfile.email}
                            onChange={handleInput} required
                        />
                        <input
                            className="form-input"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={userProfile.password}
                            onChange={handleInput} required
                        />
                        <div className="form-actions">
                           <button type="submit" className="login-button"> Login</button> 
                            <p className="forgot-password">Forgot password?</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login


// function Login() {
     
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     function handleSubmit(e) {
//         e.preventDeafault()
//         console.log(email,password)
//     }
     
//     return (
//         <div className="login">
//             <div className="container">
//                 <div className="right">
//                     <h2 className="form-title">Login</h2>
//                     <form method="post" onSubmit={handleSubmit}>
//                         <input
//                             className="form-input"
//                             type="email"
//                             name="email"
//                             placeholder="Enter your email"
//                             value={email}
//                             onChange={e=>setEmail(e.target.value)}required
//                         />
//                         <input
//                             className="form-input"
//                             type="password"
//                             name="password"
//                             placeholder="Enter your password"
//                             value={password}
//                             onChange={e=>setPassword(e.target.value)} required
//                         />
//                         <div className="form-actions">
//                             <button type="submit" className="login-button">Login</button>
//                             <p className="forgot-password">Forgot password?</p>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Login