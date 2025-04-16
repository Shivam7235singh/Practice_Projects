// /components/ThemeToggle.tsx
import useThemeStore from "../store/useThemeStore";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-gray-300 dark:bg-gray-700 transition-all"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
