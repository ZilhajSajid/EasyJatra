import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />

      {/* Sun */}
      <svg className="swap-off fill-current w-6 h-6" viewBox="0 0 24 24">
        <path d="M5.64 17.66A9 9 0 1118.36 6.34 9 9 0 015.64 17.66z" />
      </svg>

      {/* Moon */}
      <svg className="swap-on fill-current w-6 h-6" viewBox="0 0 24 24">
        <path d="M21.64 13A9 9 0 1111 2.36 7 7 0 0021.64 13z" />
      </svg>
    </label>
  );
};

export default ThemeToggle;
