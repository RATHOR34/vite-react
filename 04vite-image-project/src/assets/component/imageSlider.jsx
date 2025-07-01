import React from "react";
// import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";

function ImageSlider({ images }){
    const [currentIndex,setCurrentIndex] = useState(0)

    function prevSlide(){
        setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : prev-1
    )
    //  if(currentIndex === 0){
    //     setCurrentIndex(3)
    //  }else{
    //     setCurrentIndex((prev) =>
    //     prev === images.length-1 ? 0 : prev + 1
    //     )
    //  }
     }
     

     function nextSlide(){
        setCurrentIndex((prev)=>
        prev === images.length-1 ? 0 : prev + 1
        )
     }
     return(
        <div style={{position:"relative",maxWidth: "800px",margin: "auto"}}>
            
            <img src={images[currentIndex]} style={{width: "100%", display: "block"}}></img>
             <button onClick={prevSlide} style={{   position: "absolute",
                top: "50%",
                left: "10px",
                 transform: 'translateY(-50%)',
                 background: 'rgba(0,0,0,0.5)',
                 color: 'white',
                 border: 'none',
                 padding: '10px',
                 cursor: 'pointer'}}>prev</button>
             
             <button onClick={nextSlide} style={{position: "absolute",
                top: "50%",
                right: "10px",
                 transform: 'translateY(-50%)',
                 background: 'rgba(0,0,0,0.5)',
                 color: 'white',
                 border: 'none',
                 padding: '10px',
                 cursor: 'pointer'}}>Next</button>
        </div>
     )
    }
export default ImageSlider