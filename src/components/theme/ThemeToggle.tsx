"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="h-10 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
    );
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex h-10 w-20 items-center rounded-full bg-gray-200 transition-colors duration-300 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span
        className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-white shadow transition-all duration-300 ease-out dark:bg-gray-800"
        style={{ left: isLight ? "calc(100% - 2.25rem)" : "4px" }}
      >
        {isLight ? (
          <Sun className="h-4 w-4 text-amber-500" />
        ) : (
          <Moon className="h-4 w-4 text-slate-400" />
        )}
      </span>
    </button>
  );
}
