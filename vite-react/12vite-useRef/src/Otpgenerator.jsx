import React, { useState } from 'react'
import { useRef } from 'react';
import "./otp.css"
function Otpgenerator() {

    let inputs = useRef([]);
    const [otpValue, setOtpValue] = useState("")


    function handleChange(e, index) {

        const value = e.target.value;

        if (value.length === 1 && index < inputs.current.length - 1) {
            inputs.current[index + 1].focus()
        }
        // updateOtp()
    }


    function handleKeyDown(e, index) {

        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputs.current[index - 1].focus()
        }
    }

    // function updateOtp() {
    //     let otpData = inputs.current.map((input) => input.value).join('')
    //     setOtpValue(otpData)

    // }


    function handleSubmit() {
        let allInputs = inputs.current.map(input => input.value);

        const areAllEmpty = allInputs.every(value => value.trim() === "");
        const areAllFilled = allInputs.every(value => value.trim() !== "");

        if (areAllEmpty) {

            alert("Inputs not found");

        } else if (areAllFilled) {

            alert("OTP is found");
            let otpData = allInputs.join('');
            setOtpValue(otpData);
            console.log("OTP:", otpData);

        } else {

            alert("Some inputs are missing");

        }

        // Clear inputs after submission (optional)
        inputs.current.forEach((input) => input.value = "");
    }

     
    return (
        <div>
            
            <div style={{ display: "flex", flexDirection: "column" } } className='main-div'>

                <div className="heading">
                    <div>
                           <h1>OTP Authentication</h1>
                           <p> Enter the 4 digit OTP sent your email</p>
                    </div>

                </div>
                <div className='inner-div' >
                    {
                        [0, 1, 2, 3].map((_, index) => {
                            return (
                                <input
                                    key={index}
                                    type='text'
                                    maxLength={"1"}
                                    
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={(el) => inputs.current[index] = el}
                                />


                            )
                        })
                    }
                </div>
                <button className='btn' onClick={handleSubmit}>Submit</button>
                <p>Didn't receive an OTP.Resend</p>
            </div>
        </div>
    )
    

}

export default Otpgenerator

