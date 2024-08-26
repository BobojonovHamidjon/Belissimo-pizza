import React, { useContext } from "react";
import RadioButtons from "../../../components/RadioButtons";
import { fifty, sizeList, thinknesList } from "../../../constants/data";
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

function Selected({ selected }) {
  const { addToCart } = useContext(CartContext);
  const handleThiknesChange = () => {};
  const navigate = useNavigate();

  const handleClick = () => {
    addToCart({ ...fifty, qty: 1 });
    navigate("/");
  };

  return (
    <div className="half-main">
      <div className="half-main__image">
        <div className="half-main__image_left">
          {selected?.left?.image && <img src={selected?.left?.image} alt="" />}
        </div>
        <div className="half-main__image_right">
          {selected?.right?.image && (
            <img src={selected?.right?.image} alt="" />
          )}
        </div>
      </div>
      <div>
        <p>Pitsa kattaligi</p>
        <RadioButtons
          list={sizeList.filter((item) => item.value === "large")}
          onChange={handleThiknesChange}
        />
      </div>
      <div>
        <p>Bortni tanlang</p>
        <RadioButtons list={thinknesList} onChange={handleThiknesChange} />
      </div>
      <div>
        <p>{92000} so'm</p>
        <button
          className="half-main__button"
          disabled={!(selected?.left?.id && selected?.right?.id)}
          onClick={handleClick}
        >
          Savatga qo'shish
        </button>
      </div>
    </div>
  );
}

export default Selected;
