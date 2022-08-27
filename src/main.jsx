import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//Importamos el componente del contexto
import {TaskContextProvider} from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*Englobamos el contexto*/}
   <TaskContextProvider>
      <App />
    </TaskContextProvider> 
  </React.StrictMode>
)
