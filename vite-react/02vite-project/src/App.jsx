import { useState } from "react";

// function App(){

//   const [inputVal,setInputVal] = useState("")
//   const [firstName,setFirstName] = useState("")
//   // const [list,setList] = useState([])

//   function handleClick(){
//     setInputVal('')
//      console.log(inputVal)
//     // console.log(list)
//   }

//    function handleChange(event){
//      setInputVal(event.target.value)
//  }

//  return(
//   <>
//    <div>
    
//      {/* <input onChange={handleChange}  /> */}
    
//     <input onChange={ (event) => setInputVal(event.target.value)} value={inputVal} />
//     <input onChange={(event)=> setFirstName(event.target.value)} value={firstName} type="text" name="" id="" placeholder="Enter your first name"  />
//     <button onClick={handleClick}>click me</button>
   
//     <p>{inputVal}</p>
//     <p>FirstName: {firstName}</p>

//    </div>
//   </>
//  )
// }


function App(){
  
  let [inputVal,setInputVal] = useState("")
  let [name,setName] = useState("")
  
  function handleChange(e){
     console.log(e.target.value)
     setInputVal(e.target.value)
    }

    function handleClick(){
       setName(name+" "+inputVal)
       setInputVal("")
       
      }
    
    return(
      <>
      <input  onChange={handleChange} value={inputVal} type="text" name="" id="" placeholder="Enter your name"/>
      <input type="email" name="" id="" />
      <button onClick={handleClick}>save</button>
      {/* <p>Name: {name.toUpperCase}</p> */}
      <p>Name: {name.toUpperCase()}</p>
      </>
  )
  
}

export default App
// function App(){
  
//   let [inputVal,setInputVal] = useState("")
//   let [name,setName] = useState("")
//   let [email,setEmail] = useState("")
//   let [err,setErr] =useState("")
//   function handleChange(e){
//     setEmail(e.target.value)
//     if(!email.includes("@"))
//      setErr("add @ in your email address")
//     }

//     function handleClick(){
//        console.log("working")
//        if(email.includes("@")){
//          alert("add @ in your email address")
//        }
       
//       }
    
//     return(
//       <>
//       <input  onChange={(e)=>{setInputVal(e.target.value)}} value={inputVal} type="text" name="" id="" placeholder="Enter your name"/>
//       <input type="email" onChange={handleChange} value={email} required />
//       {/* <p style={{color:"red"}}err></p> */}
//       <button onClick={handleClick}>save</button>
//       {/* <p>Name: {name.toUpperCase}</p> */}
//       <p>Name: {name.toUpperCase()}</p>
//       </>
//   )
  
// }

// export default App