import React, { useState } from 'react'
import { useRef } from 'react';

function Otpgenerator() {


     let inputs = useRef([]);
     let  pararef = useRef("")

     const [otpValue,setOtpValue] = useState("")

     function handleChange(e, index) {
        const value = e.target.value;

        if (value.length === 1 && index < inputs.current.length -1) {
            inputs.current[index + 1].focus()
        }

        updateOtp()
    }

    function handleKeyDown(e,index){
        console.log(index)
       
        if(e.key === "Backspace" && !e.target.value && index > 0){
            inputs.current[index -1].focus()
        }
    }

    function updateOtp(){
        let otpData = inputs.current.map((input) => input.value).join('')
        setOtpValue(otpData)
      
    }
    console.log(inputs.current)

     
    function handleSubmit(){
        console.log(otpValue)
          
        inputs.current.map((input) => input.value = "")
       
    }

    function handleClick(){
        console.log(pararef.current.innerHTML)
        pararef.current.innerHTML = "yes i have changed you";
        pararef.current.style.color = "red"
        
    }
 
        return (
            <div>
                <p ref={pararef}>OtpGenerator</p>
                <div style={{display: "flex",flexDirection:"column"}}>
                   <div>
                    {
                        [0, 1, 2, 3].map((_, index) => {
                            return (
                                <input
                                    key={index}
                                    type='text'
                                    maxLength={"1"}
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        textAlign: "center",
                                        fontSize: "20px"
                                    }}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e,index)}
                                    ref={(el) => inputs.current[index] = el}
                                />
                              

                            )
                        })
                    }
                    </div>
                   <button onClick={handleSubmit}>get result</button>
                   <button onClick={handleClick}>useRef</button>
                   
                </div>
            </div>
        )    
    
    }

    export default Otpgenerator