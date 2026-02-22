"use client";

import { useEffect, useState } from "react";
import { getTheme, setTheme as persistTheme, type Theme } from "@/lib/theme";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setThemeState(getTheme());
  }, []);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    persistTheme(next);
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return { theme, setTheme, toggleTheme, mounted };
}
