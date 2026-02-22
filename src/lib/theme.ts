export const THEME_KEY = "theme";
export type Theme = "light" | "dark";

export function getTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return "dark";
}

export function setTheme(theme: Theme): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
}
