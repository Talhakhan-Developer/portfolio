// eslint-disable-next-line no-unused-vars
import react, { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

// eslint-disable-next-line react/prop-types
export const DarkModeProvider = ({ children }) => {
  // Load dark mode preference from localStorage
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    // Save dark mode preference to localStorage
    localStorage.setItem("isDarkMode", newDarkMode.toString());
  };

  // Sync dark mode preference with localStorage on component mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode") === "true";
    if (storedDarkMode !== isDarkMode) {
      setIsDarkMode(storedDarkMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDarkMode = () => useContext(DarkModeContext);
