import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
// import DropdownHandler from './DropdownHandler';
import Register from './Register';
function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    

    const navigate = useNavigate()
    function handleLogin(e) {
        console.log("hello")
        e.preventDefault()

        let users = JSON.parse(localStorage.getItem("users") || [])

        let existingUser = users.find(
            (u) => u.email === email && u.password === password
        );

        if (existingUser) {
            localStorage.setItem("loggedInUser", JSON.stringify({
                email: existingUser.email,
                password: existingUser.password
            }))

            alert("You have successfully logged in");
            navigate("/");
            form.className.add = "d-none"
        }


        setEmail("");
        setPassword("");

    }


    return (
        <div>
            <form method='post' onSubmit={handleLogin} className="p-4">
                {/* Email input   */}
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                    <input type="email" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} id="form2Example1" className="form-control" placeholder='Enter your email' required />
                </div>

                {/* Password input   */}
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input type="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} id="form2Example2" className="form-control" placeholder='Enter your password' required />
                </div>

                {/* 2 column grid layout for inline styling  */}
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        {/* Checkbox   */}
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
                        </div>
                    </div>

                    <div className="col">
                        {/* Simple NavLink  */}
                        <NavLink to="#!">Forgot password?</NavLink>
                    </div>
                </div>

                {/* Submit button   */}
                <button type="submit"
                    className="btn btn-primary btn-block mb-4"> Sign in</button>

                {/* Register buttons  */}
                <div className="text-center">
                    <p>Not a member? <Link to="/register">Register</Link></p>
                    <p>or sign up with:</p>

                </div>
            </form>
        </div>
    )
}

export default Login

