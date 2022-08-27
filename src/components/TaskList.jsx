import TaskCard from "./TaskCard"
import { useContext } from "react"
import {TaskContext} from '../context/TaskContext'

//Quitamos promesas
function TaskList() {

    //Llamamos el contexto que necesitamos
    const {tareas} = useContext(TaskContext)

    if(tareas.length === 0){
      return <h1>No hay tareas</h1>
    }
    return (
      <div>
        {
            tareas.map((tarea)=> (
                <TaskCard key={tarea.id} tarea={tarea}/> 
            )
            )
        }
      </div>
    )
}

export default TaskList
