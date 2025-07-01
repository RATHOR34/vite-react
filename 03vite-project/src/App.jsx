import { useState } from 'react'
// import Greeting from "./Greeting" 
import Product from './product'
function App() {
   let [loggedIn,setLoggedIn] = useState(false)

  return (
    <>
       <h1>condition rendering</h1>
       {/* <Greeting logged={loggedIn} /> */}
       <Product />
    </>
  )
}

export default App
