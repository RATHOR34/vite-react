import { useRef } from 'react'
 
import './App.css'

function App() {
 
  const inputRef = useRef(null)
   let pararef = useRef("")
  
  function handleClick(){
       console.log(inputRef.current.focus())
  }


  function handleBlur(){
    inputRef.current.blur()
    console.log(inputRef.current.value)
    inputRef.current.value = ""
  }


   function handle() {
        console.log(pararef.current.innerHTML)
        pararef.current.innerHTML = "yes i have changed you";
        pararef.current.style.color = "red"

    }
  return (
      <div>
        <h1 ref={pararef}>useRef</h1>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>focus</button>
        <button onClick={handleBlur}>Blur</button>
         <button onClick={handle}>useRef</button>

      </div>
  )
}

export default App
