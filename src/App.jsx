
//Add task from form

import TaskList from './TaskList'
import TaskForm from './TaskForm'
import {tasks as data } from './tasks.js'
import { useEffect, useState } from 'react'

function App() {
  const [tareas,setTask] = useState([])

  useEffect(()=>{
    setTask(data)
  },[])

  function createTask(title,description){ 
    // [...tasks, task] = [a,b,c] + 3 = [a,b,c,3]
    setTask([...tareas, {
      id:tareas.length,
      title:title,
      description:description
    }])

  }

  return (
    <>
      <TaskForm createTask={createTask}></TaskForm> 
      <TaskList tareas={tareas}/>
    </>
  )
}

export default App
