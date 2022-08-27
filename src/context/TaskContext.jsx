import { createContext } from "react"

//1111111111111111111111      Necesario para ejecutar lo de ./src/App.js   111111111111111111111111111111
import { useState, useEffect } from "react";
import {tasks as data} from '../data/tasks.js'
//1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

export const TaskContext = createContext();

export function TaskContextProvider(props) {

  //2222222222222222222222      EXPORTADO DE ./src/App.js   22222222222222222222222222222222222222222222222
  const [tareas,setTask] = useState([])

  useEffect(()=>{
    setTask(data)
  },[])

  function createTask(title,description){ 
    setTask([...tareas, {
      id: tareas.length,
      title:title,
      description:description
    }])
  }
  function deleteTask(taskID){
    setTask(tareas.filter(tarea => tarea.id !== taskID))
  }
  
  
  //222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
  return (
    <TaskContext.Provider value={{
      tareas: tareas, 
      createTask:createTask,
      deleteTask:deleteTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
