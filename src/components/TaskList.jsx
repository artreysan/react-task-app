import TaskCard from "./TaskCard"
function TaskList({tareas,deleteTask}) {
    if(tareas.length === 0){
      return <h1>No hay tareas</h1>
    }

    return (
      <div>
        {
            tareas.map((tarea)=> (
                <TaskCard key={tarea.id} tarea={tarea} deleteTask={deleteTask}/> 
            )
            )
        }
      </div>
    )
}

export default TaskList
