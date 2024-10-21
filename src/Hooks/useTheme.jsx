import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeProvider/ThemeProvider";

// Custom Hook to use ThemeContext
const useTheme = () => useContext(ThemeContext);

export default useTheme;
