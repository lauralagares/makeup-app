import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');
    const [fontColor, setFontColor] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        setFontColor(fontColor === 'dark' ? 'light' : 'dark');
    }

    return <ThemeContext.Provider value={{theme, fontColor, toggleTheme}}
    >{children}</ThemeContext.Provider>
}

export {ThemeContext, ThemeProvider} 