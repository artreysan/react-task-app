//Importamos el contexto que creamos y usaremos
import {TaskContext} from '../context/TaskContext'
//Importamos la libreria para usar el contexto creado
import {useContext} from 'react'

// Quitamos promesas
function TaskCard({tarea}) {

  //Indicamos que usaremos el contexto
  const {deleteTask}= useContext(TaskContext)

  return (
      <div>
        <h1>{tarea.title}</h1>
        <p>{tarea.description}</p>
        <button onClick={
          () => deleteTask(tarea.id)
        }>Eliminar tarea</button>
      </div>
  )
}

export default TaskCard