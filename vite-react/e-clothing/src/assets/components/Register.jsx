import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Register() {

    let navigate = useNavigate()

    const [userProfile, setUserProfile] = useState({
        name: "",
        phone: "",
        email: "",
        password: ""
    })

    function handleChange(e) {

        setUserProfile(prev => ({ ...prev, [e.target.name]: e.target.value }))

    }


    function handleRegister(e) {
        e.preventDefault()
        console.log(userProfile);

        //  get all registered users (array)

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // check if email already exists
        let existingUser = users.find(u => u.email === userProfile.email)



        if (existingUser) {
            alert("You have already registered with this email");
            navigate("/login");
            return;
        }

        //  Add new user to array
        users.push(userProfile);


        localStorage.setItem("users", JSON.stringify(users))

        setUserProfile({
            name: "",
            phone: "",
            email: "",
            password: ""

        })

        alert("Registration successful! Please login.");
        navigate("/login");





    }

    return (
        <div>
            <div className="container" style={{marginTop:"90px"}}>
                <div className="row pt-5">
                    <div className="col-md-6 m-auto p-4 rounded" style={{ background: "lavender" }}>
                        <h2 className='text-center'>Register</h2>
                        <form method='post' onSubmit={handleRegister} action="">
                            <div className="mb-4">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" name='name' value={userProfile.name} onChange={handleChange} className="form-control" id="name" placeholder="Enter your name" required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="Phone" className="form-label">Your Phone</label>
                                <input type="mobile" name='phone' value={userProfile.phone} onChange={handleChange} className="form-control" id="phone" placeholder="Enter your number" required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input type="email" name='email' value={userProfile.email} onChange={handleChange} className="form-control" id="topic" placeholder="Enter your email" required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">Your Password</label>
                                <input type="password" name='password' value={userProfile.password} onChange={handleChange} className="form-control" id="topic" placeholder="Enter your password" required />
                            </div>

                            <div className="mb-4">
                                <button type="submit" className="btn text-white" style={{ backgroundColor: "#008DB1" }}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register