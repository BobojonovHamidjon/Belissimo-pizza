import React, { useState } from "react";

function RadioButtons({ list, onChange }) {
  const [active, setActive] = useState(0);

  function handleButton(idx, value) {
    setActive(idx);
    onChange(value);
  }

  return (
    <div className="radiobuttons">
      <div className="radiobuttons-row">
        {list.map(({ label, value }, i) => (
          <button
            className={
              active === i
                ? "radiobuttons-button active"
                : "radiobuttons-button"
            }
            key={i}
            onClick={() => handleButton(i, value)}
            style={{ width: `${100 / list.length}%` }}
          >
            {label}
          </button>
        ))}
        <span
          className="checked"
          style={{
            width: `calc(${100 / list.length}% - 3px)`,
            transform: `translateX(${active * 100}%)`,
          }}
        ></span>
      </div>
    </div>
  );
}

export default RadioButtons;
