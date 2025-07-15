// import { useState } from "react"
// import "./App.css"

// function App() {

//   const [task, setTask] = useState("")
//   const [tasks, setTasks] = useState([])
//   const [editStart, setEditStart] = useState(false)
//   const [editItemId, setEditItemId] = useState("")

//   // let arr = ["rakesh","ravi","rahul"]
//   // // arr.push("ranjit")

//   // let arr2 = [...arr,"ranjit","sunny"]

//   function handleAdd() {
    
//     if (task.trim() === "") {
//       return alert("please enter a task")
//     }
    
//     if(editStart) {
     
//       let filterData = tasks.map((item) => item.id === editItemId ? item.text = task : item)
       
//       setEditItemId("")
//       setEditStart(false)

//     } else {
//         setTasks((prev) => [...prev, {
//         id: Date.now(),
//         text: task,
//         completed: false
//       }]
//     )

//     }



//     // changing input value to empty
//     setTask("")
//   }


//   function handleDelete(id) {
//     // console.log(id)
//     let filterData = tasks.filter((item) => item.id !== id)

//     setTasks(filterData)
//   }

//   function handleEdit(id,text) {
//     setEditItemId(id)
//     setEditStart(true)
//     // let filterData = tasks.filter((item) => item.id == id)
//     // console.log(filterData)
//     setTask(text)
//   }

//   function handleComplete(id){
       
//       setTasks(tasks.map((task) => 
//          task.id === id ? {...task,completed: !task.completed} : task
//       ))
//   }

//   return (
//     <div className="todo-app">
//       <div className="todo-container">
//         <h1>My To-Do List</h1>

//         <div>
//           <input type="text" name="" id="" placeholder="Add your task" onChange={(e) => setTask(e.target.value.toLocaleUpperCase())} value={task} />
//           <button onClick={handleAdd}>Add</button>

//         </div>

//       </div>

//       <div className="dropdown-list">

//         {
//           (tasks.length === 0)? <p>No task yet. Add your task</p> :
//           tasks.map((item) => {
//             return (
//               <p className={`${item.completed ? "task-completed" : ""}`} id="list" key={item.id}> {item.text} 
//               <span onClick={() => handleDelete(item.id)}>delete</span> 
//               <span onClick={() => { handleEdit(item.id,item.text) }}>edit</span> 
//               <span onClick={() => handleComplete(item.id) }>{item.completed ? "completed": "not completed"}</span>
//               </p>

//             )
//           })
//         }
//       </div>
       
//       {/* <style jsx="true">{
//        `
//        h1{
//          background-color: grey;
//          padding: 1rem;
//          border-radius: 0.6rem
//        }
        
//        #list{
//         display: flex;
//         justify-content: space-between;
//        }

//        span{
//          border: 1px solid black;
//          padding: 3px 10px;
//          border-radius: 0.5rem;
//          cursor: pointer
//        }

//        .task-completed{
//          opacity: 0.6;
//          text-decoration: line-through;
//        }
//        `
//        }

//       </style> */}
      

//     </div>
//   )
// }
// export default App

import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editStart, setEditStart] = useState(false);
  const [editItemId, setEditItemId] = useState("");

  function handleAdd() {
    if (task.trim() === "") {
      return alert("Please enter a task.");
    }

    if (editStart) {
      setTasks((prev) =>
        prev.map((item) =>
          item.id === editItemId ? { ...item, text: task } : item
        )
      );
      setEditItemId("");
      setEditStart(false);
    } else {
      setTasks((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: task,
          completed: false,
        },
      ]);
    }

    setTask("");
  }

  function handleDelete(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  function handleEdit(id, text) {
    setEditItemId(id);
    setEditStart(true);
    setTask(text);
  }

  function handleComplete(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1>📝 My To-Do List</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Write your task here..."
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
          />
          <button onClick={handleAdd}>
            {editStart ? "Update Task" : "Add Task"}
          </button>
        </div>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="no-task">No task yet. Add something!</p>
          ) : (
            tasks.map((item) => (
              <div
                key={item.id}
                className={`task-card ${item.completed ? "done" : ""}`}
              >
                <span className="task-text">{item.text}</span>
                <div className="actions">
                  <button onClick={() => handleDelete(item.id)} className="delete">
                    🗑
                  </button>
                  <button onClick={() => handleEdit(item.id, item.text)} className="edit">
                    ✏️
                  </button>
                  <button onClick={() => handleComplete(item.id)} className="complete">
                    {item.completed ? "✅ Done" : "⏳ Pending"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <style jsx="true">{`
       
       body{
         background: linear-gradient(to right, #667eea, #764ba2);
       }
       * {
          box-sizing: border-box;
          margin:auto
        }

        .app-container {
          min-height: 100vh;
 
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .todo-box {
          background-color: white;
          border-radius: 1rem;
          padding: 2rem;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          animation: bounceIn 0.5s ease;
        }

        h1 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .input-section {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        input {
          flex: 1;
          padding: 0.7rem;
          border: 2px solid #ccc;
          border-radius: 0.5rem;
          font-size: 1rem;
        }

        button {
          padding: 0.7rem 1rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: bold;
          transition: transform 0.2s, background 0.3s;
        }

        button:hover {
          transform: scale(1.05);
        }

        .task-list {
          margin-top: 1rem;
        }

        .task-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f7f7f7;
          padding: 0.8rem 1rem;
          border-radius: 0.6rem;
          margin-bottom: 0.7rem;
          animation: fadeIn 0.4s ease-in-out;
        }

        .task-card.done {
          background-color: #d4edda;
          text-decoration: line-through;
          color: #4f7754;
        }

        .task-text {
          font-size: 1rem;
          font-weight: 500;
          flex: 1;
        }

        .actions {
          display: flex;
          gap: 0.5rem;
        }

        .actions button {
          background-color: #e2e2e2;
        }

        .actions .delete {
          background-color: #f44336;
          color: white;
        }

        .actions .edit {
          background-color: #ff9800;
          color: white;
        }

        .actions .complete {
          background-color: #4caf50;
          color: white;
        }

        .no-task {
          text-align: center;
          color: #555;
        }

        /* Animations */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          60% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
