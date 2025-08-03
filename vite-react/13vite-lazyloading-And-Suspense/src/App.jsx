import React, { lazy, Suspense} from 'react'
import './App.css'
import Spinner from './Spinner'
// import homepage from './homePage'

const Homepage = lazy(() => import("./homePage"))
function App() {
   
  return (
    <>
       <Suspense fallback= {<Spinner />}>
           <Homepage />
       </Suspense>
    </>
  )
}

export default App
