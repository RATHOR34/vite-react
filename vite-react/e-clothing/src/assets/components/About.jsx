import React from 'react'
import { aboutDetail, membarDetail } from '../javascript/about'

function About() {
    return (


        <div className="container" style={{marginTop:"90px"}}>
            <div className="row py-4">
                {aboutDetail.map((about, index) => (
                    <div className="col-md-6 text-center pb-1" style={{ background: "#f9f9f9" }} key={about.id}>
                        <h3>{about.heading}</h3>
                        <p>{about.detail}</p>
                    </div>
                ))}
            </div>

            <div className="row">

                <h1 className="text-center p-4">OurTeam</h1>

                {membarDetail.map((member, index) => (
                    <div className="col-md-3 member align-items-center" key={member.id}>
                        <img src={member.src} className="img-fluid" alt="member"></img>
                        <h6 className=" title text-center py-2">{member.name}</h6>
                        <p className="text-center">{member.post}</p>
                        <div className="icons d-flex ">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-2 fs-5">
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-2 fs-5">
                                <i className="bi bi-twitter"></i>
                            </a>

                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-2 fs-5">
                                <i className="bi bi-instagram"></i>
                            </a>

                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default About