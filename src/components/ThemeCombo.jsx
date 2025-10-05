import React, { useState } from "react";
import { useTheme } from "../i18n/ThemeContext";

export default function ThemeCombo() {
  const { theme, switchTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);

  const handleSelect = (key) => {
    switchTheme(key);
    setOpen(false);
  };

  return (
    <div className="theme-combo">
      <button className="combo-trigger" onClick={() => setOpen(!open)}>
        {themes[theme].name} ▼
      </button>
      {open && (
        <ul className="combo-list">
          {Object.keys(themes).map((key) => (
            <li
              key={key}
              className={key === theme ? "active" : ""}
              onClick={() => handleSelect(key)}
            >
              {themes[key].name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
