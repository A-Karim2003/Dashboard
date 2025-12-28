import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) ?? defaultTheme
  );

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");

    const resolvedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    html.classList.add(resolvedTheme);
  }, [theme]);

  function changeTheme(newTheme) {
    localStorage.setItem(storageKey, newTheme);
    setTheme(newTheme);
  }

  return (
    <ThemeContext value={{ setTheme: changeTheme }}>{children}</ThemeContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
