
function TaskCard({tarea,deleteTask}) {

  function showAlert(){
    alert(`Eliminando ${tarea.id} ...`)
  }
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