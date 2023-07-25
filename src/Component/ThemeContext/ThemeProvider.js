import { createContext, useState } from 'react';

export const Theme = createContext();
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const value = { theme, changeTheme };
    return <Theme.Provider value={value}>{children}</Theme.Provider>;
}

export default ThemeProvider;
