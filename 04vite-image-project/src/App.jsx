  
 import firstImg from "../public/images/profileImage1.webp";
 import secondImg from "../public/images/profileImage2.webp";
 import thirdImg from "../public/images/profileImage4.webp"
 import ImageSlider from './assets/component/ImageSlider';
 
 function App(){
    let images = [firstImg,secondImg,thirdImg]
    return(
    <>
       <h2>image slider</h2>
       <ImageSlider images={images} />
    </>
    )
 }
 
 export default App