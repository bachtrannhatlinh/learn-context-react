import { createContext, React, useState } from "react";

export const ThemeContext = createContext(null);

export default function ContextGlobal({children}) {
  const [theme, setTheme] = useState('dark')

  function handleTheme() {
    setTheme(theme => { return  theme === 'dark' ? 'light' : 'dark'})
  }

  let storeProvider = {
    theme,
    handleTheme
  }
  return (
    <ThemeContext.Provider value={storeProvider}>
      <>{children}</>
    </ThemeContext.Provider>
  )
}

