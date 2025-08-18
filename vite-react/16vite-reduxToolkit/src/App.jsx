import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement,reset } from './redux/features/counterSlice' 


function App() {
 
const {value} = useSelector((state) => state.counter)

const dispatch = useDispatch()
console.log(count)

  return(
    <>
    <button onClick={() => dispatch(increment())}>inc</button>
    <p>{count}</p>
    <button onClick={() => dispatch(decrement())}>dec</button>
    <button onClick={() => dispatch(reset())}>reset</button>
    <p>counter app</p>
    </>
  )   

}

export default App
