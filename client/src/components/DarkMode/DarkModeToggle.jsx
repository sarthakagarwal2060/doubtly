
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { DarkModeProvider } from "./DarkModeProvider";

function DarkModeToggle() {
  const { currentTheme, toggleTheme } = useDarkMode();

 

  return (
    <>
      
      {currentTheme === "dark" ? (
        <Sun className="h-10 w-7 cursor-pointer" onClick={toggleTheme} />
      ) : (
        <Moon className="h-12 w-5 cursor-pointer" onClick={toggleTheme} />
      )}
    </>
  );
}

export default DarkModeToggle;
