import useThemeStore from "./store/useThemeStore";
import ThemeToggle from "./components/ThemeToggle"; // PascalCase, no .tsx

const App = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white text-black flex dark:bg-gray-600 dark:text-white justify-center font-bold h-54 items-center flex-col gap-4">
        <h1 className="font-bold text-center text-2xl">Use Zustand Theme</h1>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default App;
