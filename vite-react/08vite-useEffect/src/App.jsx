import { useState } from 'react'
import './App.css'

function App() {

  const [data,setData] = useState({})

  function handleFetch(){
   fetch("https://randomuser.me/api/")
   .then((res) => {
    return res.json()
   }).then((res) => {
      console.log(res)
      setData(res.results[0])
   })
    
  }
   
  return (
    <>
       <h1>Random user api</h1>
       <button onClick={handleFetch}>get data</button>
       {data.name !== undefined ?
       
        <div>
          <img src={data.picture.large} alt="" />
          <p>{data.name.first}</p>
       </div>: ""

       }
      
    </>
  )
}

export default App
