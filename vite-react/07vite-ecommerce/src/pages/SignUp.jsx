import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./signUp.css" 
// import registerImg from "../images/register.jpg"
import { useNavigate } from 'react-router-dom' 


function SignUp() {

  // const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
// const [userProfile,setUserProfile] = useState({})

 function handleSubmit(e){
  e.preventDeafault()
  console.log(name,email,phone,username,password)
 }
 console.log("hello")
  return (
    <div className='register'>
    
    <div className='container'> 
    {/* <div className='left'><img src={registerImg} alt="register -img"></img></div> */}
    <div className='right'> 
      <h2>Register</h2>

      <form method='post' style={{color: "white", fontSize: "1rem", fontWeight: "500"}}>
        <input type='text' name='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)} required/><br />
        <input type='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required/><br />
        <input type='number' id='mobile' name='phone' placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} required/><br />
        <input type='text' name='username' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} required/><br />
        <input type='password' name='password' placeholder='Password'value={password} onChange={e => setPassword(e.target.value)} required/><br />

        <div className='btns'> <button onClick={handleSubmit}  name='register'>Submit</button> 
        <p>Already have an account?  <Link to="/login">Login</Link></p>
        </div>

      </form>
      </div>
    </div> 
    </div>
  )
}

export default SignUp