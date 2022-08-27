//Importamos el contexto que creamos y usaremos
import {TaskContext} from '../context/TaskContext'
//Importamos la libreria para usar el contexto creado
import {useContext} from 'react'

function TaskCard({tarea,deleteTask}) {

  //Indicamos que usaremos el contexto
  const valor = useContext(TaskContext)

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