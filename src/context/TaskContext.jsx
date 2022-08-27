import { createContext } from "react"

//Creamos un contexto
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  return (
    <TaskContext.Provider>
        {props.children}
    </TaskContext.Provider>
  )
}
