import { useState } from "react"

function TaskForm({createTask}) {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    const handleSubmit = (e) =>{
        //Esto es como modificar la constante en App.jsx
        e.preventDefault();
        
        createTask(title, description)
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                placeholder='Escribir una tarea' 
                onChange={ (e) => {setTitle(e.target.value)
                }}/>
            <textarea 
                placeholder='Escribir una descripcion' 
                onChange={ (e) => {setDescription(e.target.value)
                }}></textarea>
                
            <button>Guardar</button>
        </form>
    </div>
    )
}
export default TaskForm