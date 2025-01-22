import {  useContext, createContext } from 'react'
import './App.css'

const ThemeContext = createContext();
const LanguageContext = createContext();

function App() {
  const theme = "light";
  const language = "en";

  return (
    <ThemeContext.Provider value={theme}>
      <LanguageContext.Provider value={language}>
        <Header />
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  const language = useContext(LanguageContext);

  return (
    <div>
      <p>Tema: {theme}</p>
      <p>Idioma: {language}</p>
    </div>
  );
}

export default App
