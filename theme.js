(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("tt-theme");
  if (stored) root.setAttribute("data-theme", stored);

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    const updateLabel = () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      btn.textContent = isDark ? "☀ Light mode" : "🌙 Dark mode";
    };
    updateLabel();
    btn.addEventListener("click", () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      const next = isDark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("tt-theme", next);
      updateLabel();
    });
  });
})();
