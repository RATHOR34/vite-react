import Profile from "./Profile"
import profileImage1 from '../public/images/second.avif'
import profileImage2 from '../public/images/third.avif'
import profileImage3 from '../public/images/forth.avif'
function App() {
   
  return (
     
    <div className="flex"> 
       <Profile name="rahul" age="22" emailAdd="rahul@gmail.com" imgAdd={profileImage2}/>
       <Profile name="chanchal" age="22" emailAdd="chanchal@gmail.com" imgAdd={profileImage1}/>
       <Profile name="Anil" age="21" emailAdd="anil@gmail.com" imgAdd={profileImage3}/>
    </div>
  )
}

export default App
