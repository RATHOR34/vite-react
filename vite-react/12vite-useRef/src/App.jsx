import { useRef } from 'react'
 
import './App.css'

function App() {
 
  const inputRef = useRef(null)
  
  function handleClick(){
       console.log(inputRef.current.focus())
  }


  function handleBlur(){
    inputRef.current.blur()
    console.log(inputRef.current.value)
    inputRef.current.value = ""
  }

  return (
      <div>
        <h1>useRef</h1>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>focus</button>
        <button onClick={handleBlur}>Blur</button>
      </div>
  )
}

export default App
