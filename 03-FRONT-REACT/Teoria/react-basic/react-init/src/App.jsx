import { useState } from 'react'
import './App.css'
import Saludar from './components/Saludar'

function App() {
  // count (Variable para almacenar un valor) setCount (Función para actualizar el valor)
  const [nombre, setNombre ] = useState('Nombre por defecto') // 0 es el valor inicial

  return (
    <>
      <input type="text" placeholder="Nombre" onChange={(event)=>setNombre(event.target.value)} />
      <h1>
        <Saludar nombre={nombre} apellido="García" />
      </h1>
    </>
  )
}

export default App
