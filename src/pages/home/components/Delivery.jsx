import React, { useState } from "react";
import { RadioButtons } from "../../../components";
import { PenIcon } from "../../../assets/icons";

function Delivery() {
  let deleveryTexts = {
    dostavka: "Yetkazib berish manzilini tanlang",
    saboy: "Fillialni tanlang",
  };
  const typeList = [
    {
      label: "Yetkazib berish",
      value: "dostavka",
    },
    {
      label: "Olib ketish",
      value: "saboy",
    },
  ];

  const [deliveryText, setDeliveryText] = useState(deleveryTexts["dostavka"]);

  function handleRadioChange(value) {
    setDeliveryText(deleveryTexts[value]);
  }

  return (
    <div className="delivery">
      <div className="container">
        <div className="delivery-row">
          <div className="delivery-left">
            <RadioButtons list={typeList} onChange={handleRadioChange} />
          </div>
          <div className="delivery-right">
            <button className="delivery-branch">
              <span className="delivery-branch__text">{deliveryText}</span>
              <span className="delivery-branch__icon">
                <PenIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
