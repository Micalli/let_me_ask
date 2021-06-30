import DarkModeToggle from "react-dark-mode-toggle";
import { useTheme } from "../hooks/useTheme";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="toggle">
      <DarkModeToggle
        onChange={toggleTheme}
        checked={theme === "dark"}
        size={80}
      />
    </div>
  );
}