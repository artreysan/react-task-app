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
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
                <input
                    placeholder="Escribir una tarea"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    value={title}
                    className='bg-slate-300 p-3 w-full mb-2'
                    autoFocus
                />
                <textarea
                    placeholder="Escribir una descripcion"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    className='bg-slate-300 p-3 w-full mb-2'
                    value={description}
                ></textarea>

                <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-300">Guardar</button>
            </form>
        </div>
    );
}
export default TaskForm;
