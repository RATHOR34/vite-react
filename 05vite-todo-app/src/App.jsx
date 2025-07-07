import { useState } from "react"
import "./App.css"

function App() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editStart, setEditStart] = useState(false)
  const [editItemId, setEditItemId] = useState("")

  // let arr = ["rakesh","ravi","rahul"]
  // // arr.push("ranjit")

  // let arr2 = [...arr,"ranjit","sunny"]

  function handleAdd() {
    
    if (task.trim() === "") {
      return alert("please enter a task")
    }
    
    if(editStart) {
     
      let filterData = tasks.map((item) => item.id === editItemId ? item.text = task : item)
       
      setEditItemId("")
      setEditStart(false)

    } else {
        setTasks((prev) => [...prev, {
        id: Date.now(),
        text: task,
        completed: false
      }]
    )

    }



    // changing input value to empty
    setTask("")
  }


  function handleDelete(id) {
    // console.log(id)
    let filterData = tasks.filter((item) => item.id !== id)

    setTasks(filterData)
  }

  function handleEdit(id,text) {
    setEditItemId(id)
    setEditStart(true)
    // let filterData = tasks.filter((item) => item.id == id)
    // console.log(filterData)
    setTask(text)
  }


  return (
    <div className="todo-app">
      <div className="todo-container">
        <h1>My To-Do List</h1>

        <div>
          <input type="text" name="" id="" placeholder="Add your task" onChange={(e) => setTask(e.target.value.toLocaleUpperCase())} value={task} />
          <button onClick={handleAdd}>Add</button>

        </div>

      </div>

      <div className="dropdown-list">

        {
          tasks.map((item) => {
            return (
              <p key={item.id}> {item.text} <span onClick={() => handleDelete(item.id)}>delete</span> <span onClick={() => { handleEdit(item.id,item.text) }}>edit</span> </p>

            )
          })
        }
      </div>
    </div>
  )
}
export default App