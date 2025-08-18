import useCounter from './costum-hooks/useCounter'
import './App.css'

function App() {
  const { count, increment,decrement,reset } = useCounter()

  return (
    
       <div style={{ display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",minHeight:"100vh",minWidth:"100vw"}}>
        
           <button onClick={increment}>inc</button>
           <p>{count}</p>
           <button onClick={decrement}>dec</button>

           <button onClick={reset}>reset</button>


       </div>
  )
}

export default App
