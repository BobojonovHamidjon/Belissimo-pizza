import React from "react";

function IngredientModal({ open, onClose, product }) {
  return (
    <div
      className={
        open && product !== null
          ? "modal open product-modal"
          : "modal product-modal"
      }
    >
      <div className="modal-bg" onClick={onClose}></div>
      <div className="modal-panel">
        <div className="product-modal__image">
          <img src={product?.image} alt={product?.title} />
        </div>
        <div className="product-modal__content">
          <div className="product-modal__info">
            <h3 className="product-modal__title product-modal__title_large">
              {product?.title}
            </h3>
            <p className="product-modal__subtitle">{product?.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IngredientModal;
