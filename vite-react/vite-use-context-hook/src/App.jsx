import './App.css'
import Header from './Header'
import Home from './Home'
import First from './First'
import Second from './Second'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { createContext,useState } from 'react'

export const ProfileContext = createContext()

function App() {
  const [profileData,setProfileData] = useState({name:"Chanchal Rathor",age : 22})

  return (
     <ProfileContext.Provider value={{profileData,setProfileData}}>
        <BrowserRouter>
        <Header/>
        <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/first' element={<First />}></Route>
              <Route path='/second' element={<Second />}></Route>
        </Routes>
        </BrowserRouter>
     </ProfileContext.Provider>
  )
}

export default App
