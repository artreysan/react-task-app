import { useState } from "react"

function TaskForm({createTask}) {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    const handleSubmit = (e) =>{
        //Esto es como modificar la constante en App.jsx
        e.preventDefault();
        createTask(title, description)
        //Despues de eviar datos limpiamos formulario
        setTitle("")
        setDescription("")
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                placeholder='Escribir una tarea' 
                onChange=   { (e)=> {
                                    setTitle(e.target.value)
                                    }
                            }
                value = {title /*Se anade esto para limpiar formulario como definimos en la linea 11*/}
                autoFocus 
                />{/*autofocus: al recarar el cursor regresa al input */}
            <textarea 
                placeholder='Escribir una descripcion' 
                onChange=   { (e)=>{setDescription(e.target.value)
                
                                    }
                            }
                value = {description /*Se anade esto para limpiar formulario como definimos en la linea 11*/}
                 ></textarea>
                
            <button>Guardar</button>
        </form>
    </div>
    )
}
export default TaskForm