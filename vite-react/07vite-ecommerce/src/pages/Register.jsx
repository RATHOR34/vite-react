 import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./signUp.css" 
 
function Register() { 
  
  let navigate = useNavigate()
  const [userProfile, setUserProfile] = useState({
       name: "",
       phone: "",
       email: "",
       username: "",
       password: ""
  })
  
 function handleChange(e){
    // const{name,value} = e.target
    // console.log({name,value})
    setUserProfile(prev=>
    ({...prev,[e.target.name]: e.target.value})    
    )
 }
  

 function handleRegister(e){
    e.preventDefault()
    console.log(userProfile)
    setUserProfile({
        name:"",
        phone:"",
        email:"",
        username:"",
        password:""
    })
    navigate("/login")
 }


  return (
    <div className='register'>
    
    <div className='container'> 
    {/* <div className='left'><img src={registerImg} alt="register -img"></img></div> */}
    <div className='right'> 
      <h2>Register</h2>

      <form method='post' onSubmit={handleRegister} style={{color: "white", fontSize: "1rem", fontWeight: "500"}}>

        <input type='text' name='name' placeholder='Name' value={userProfile.name}  onChange={handleChange} required/><br />

        <input type='email' name='email' placeholder='Email' value={userProfile.email}  onChange={handleChange} required/><br />

        <input type='number' id='mobile' name='phone' placeholder='Phone' value={userProfile.phone} onChange={handleChange} required/><br />

        <input type='text' name='username' placeholder='Username' value={userProfile.username} onChange={handleChange} required/><br />

        <input type='password' name='password' placeholder='Password'value={userProfile.password} onChange={handleChange} required/><br />

        <div className='btns'> <button type='submit' name='register'>Submit</button> 
        <p>Already have an account?  <Link to="/login">Login</Link></p>
        </div>

      </form>
      </div>
    </div> 
    </div>
  )

}
export default Register