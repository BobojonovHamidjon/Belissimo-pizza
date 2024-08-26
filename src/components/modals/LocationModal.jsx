import { useEffect, useState } from "react";
import { locationList } from "../../constants/data";

function LocationModal({ open, onClose }) {
  const [animationBool, setAnimationBool] = useState(false)

  function handleClose(label){
    setAnimationBool(false)
    setTimeout(() => label ? onClose(label) : onClose(), 200)
  }

  useEffect(() => {
    if(open){
      setTimeout(() => setAnimationBool(true), 0)
    }
  }, [open])

  return (
    <div className={animationBool ? "modal open location-modal" : "modal location-modal"}>
      <div className="modal-bg" onClick={() => handleClose()}></div>
      <div className="modal-panel">
        <ul className="modal-panel__list">
          {locationList.map(({ id, label }) => (
            <li className="modal-panel__item" key={id}>
              <button className="modal-panel__button" onClick={() => handleClose(label)}>{label}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LocationModal;
