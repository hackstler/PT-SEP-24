

function App() {
  const theme = 'dark'
  return (
    <>
      <h1>Hello Appp</h1>
      <Header theme={theme}/>
    </>
  )
}


function Header({theme}) {
  return (
  <>
    <h1>Hello Header</h1>
    <Navbar theme={theme}/>
  </>
  )
}

function Navbar({theme}) {
  return ( 
    <>
  <h1>Hello Navbar</h1>
    <Button theme={theme}/>
  </>
)
}

function Button({theme}) {
  return <button>{theme === 'dark' ? 'MODO OSCURO' : 'MODO NORMAL'}</button>
}

export default App
