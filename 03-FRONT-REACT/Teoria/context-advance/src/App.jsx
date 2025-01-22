import { useState , createContext, useContext} from 'react'

import './App.css'
const ThemeContext = createContext();

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de ThemeProvider");
  }
  return context;
}

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <p>El tema actual es: {theme}</p>
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </div>
  );
}


export default App
