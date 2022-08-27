

import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import {tasks as data, tasks } from './data/tasks.js'
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
  
  function deleteTask(taskID){
    setTask(tareas.filter(tarea => tarea.id !== taskID))
  
  }
  return (
    <>
      <TaskForm createTask={createTask}></TaskForm> 
      <TaskList deleteTask={deleteTask} tareas={tareas}/>
    </>
  )
}

export default App
