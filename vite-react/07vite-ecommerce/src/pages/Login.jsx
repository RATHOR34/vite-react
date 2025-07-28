import { useState,useContext } from "react"
import "./login.css"
import { useNavigate } from "react-router-dom" 
import { Link } from "react-router-dom"
import { ProfileContext } from "../App"
import Profile from "./Profile"
function Login() {
   
    const [ username,setUsername] = useState("")
    const [ password,setPassword] = useState("")
    
    const navigate = useNavigate()
    const { setProfileData }  = useContext(ProfileContext)
    
    // const [userProfile, setUserProfile] = useState({
    //        email: "",
    //        password: ""
    //   })
     
//     function handleInput(e){
    
//     setUserProfile(prev=>
//     ({...prev,[e.target.name]: e.target.value})    
//     )
//  }
  
let profile = {name:"chanchal",
    Email:"racthor123@gmail.com"
}


profile.name= "chanchal Rathor"
profile["Email"] ="rathorchanchal695@gmail"

console.log(profile)
 function handleLogin(e){
    e.preventDefault()
    // console.log(username,password)
    setProfileData({username: username,password: password})
     
      setUsername("")
      setPassword("")
      navigate("/")
}

    return (
        <div className="login">
            <div className="container">
                <div className="right">
                    <h2 className="form-title">Login</h2>
                    <form method="post" onSubmit={handleLogin}>
                        <input
                            required
                            className="form-input"
                            type="text"
                            name="username"
                            placeholder="Enter your userName"
                            value={username}
                            onChange={(e) => { setUsername(e.target.value)}}  
                        />
                        <input
                            className="form-input"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value)}} required
                        />
                        <div className="form-actions">
                           <button type="submit" className="login-button"> Login</button> 
                           <p>Don't have an account? <Link to="/sign-up" style={{ fontWeight: "700", }}>Create</Link></p>
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