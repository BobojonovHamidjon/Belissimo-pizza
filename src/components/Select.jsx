import React, { useState } from "react";

function Select({ options, defaultValue, onChange, disabled }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue ? defaultValue : "");
  function handleChange(value) {
    onChange(value);
    setSelected(value);
    setOpen(false)
  }

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div className="select">
      <button className="select-button" onClick={handleOpen} disabled={disabled}>
        Bortni o'zgartirish
      </button>
      <div className={open ? "select-list active" : "select-list"}>
        {options.map((item, key) => (
          <div
            className={
              selected === item.value ? "select-item active" : "select-item"
            }
            key={key}
            onClick={() => handleChange(item.value)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Select;
