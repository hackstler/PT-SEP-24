import { useState, memo, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const ButtonChildComponent = memo(({ handleClick }) => {
  console.log("🚀 ~ childComponent ~ handleClick:", handleClick)
  return (
    <button onClick={handleClick}>Click me</button>
  )
})

ButtonChildComponent.displayName = 'ButtonChildComponent'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = useCallback(() => {
    console.log('Estoy siendo clickado')
  }, [])


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <ButtonChildComponent handleClick={handleClick} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
