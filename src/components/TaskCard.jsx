
function TaskCard({tarea}) {
  return (
    <div>
        <h1>{tarea.title}</h1>
        <p>{tarea.description}</p>
    </div>
  )
}

export default TaskCard