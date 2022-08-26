
function TaskList({tareas}) {
    if(tareas.length === 0){
      return <h1>No hay tareas</h1>
    }

    return (
      <div>
        {
            tareas.map((tarea)=> (
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
