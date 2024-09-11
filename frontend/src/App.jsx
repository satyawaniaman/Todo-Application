import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import axios from 'axios'
function App() {
  const [todos, setTodos] = useState([]);

  axios.get("http://localhost:3000/todos") 
  .then((res)=>{
    setTodos(res.data)
  })    

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
