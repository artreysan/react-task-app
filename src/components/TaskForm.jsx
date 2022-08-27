import { useState } from "react";
// Importamos el contexto
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

//Quitamos las promesas
function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    //Usamos el contexto que necesisatos
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(title, description);
        setTitle("");
        setDescription("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Escribir una tarea"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    value={title}
                    autoFocus
                />
                <textarea
                    placeholder="Escribir una descripcion"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    value={description}
                ></textarea>

                <button>Guardar</button>
            </form>
        </div>
    );
}
export default TaskForm;
