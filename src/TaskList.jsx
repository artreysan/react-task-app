import {tasks as data, tasks} from './tasks.js'
import { useEffect, useState } from 'react'


export function TaskList() {
    const [tareas,setTask] = useState([])

    useEffect(()=>{
      setTask(data)
    },[])

    if(tareas.length === 0){
      return <h1>No hay tareas</h1>
    }
    return (
      <div>
        {
            tareas.map(tarea=> (
                <div key={tarea.id}>
                  <h1>{tarea.title}</h1>
                  <p>{tarea.description}</p>
                </div>
            )
            )
        }
      </div>
    )
}

export default TaskList