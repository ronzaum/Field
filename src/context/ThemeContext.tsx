"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "night" | "day";

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "night",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("night");

  useEffect(() => {
    const stored = localStorage.getItem("field-theme") as Theme | null;
    if (stored === "day" || stored === "night") setTheme(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("field-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "night" ? "day" : "night"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
