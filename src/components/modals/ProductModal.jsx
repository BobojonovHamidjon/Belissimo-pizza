import React, { useContext, useMemo, useState } from "react";
import { PlusIcon } from "../../assets/icons";
import RadioButtons from "../RadioButtons";
import {
  ingredients,
  selectOptions,
  sizeList,
  thinknesList,
} from "../../constants/data";
import Select from "../Select";
import { CartContext } from "../../context/CartContext";

function ProductModal({ open, onClose, product }) {
  const { addToCart } = useContext(CartContext);

  const [size, setSize] = useState("small");
  const [thinknes, setThinknes] = useState("thin");
  const [bort, setBort] = useState("default");
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  function handleSizeChange(value) {
    setSize(value);
  }

  function handleThinknesChange(value) {
    setThinknes(value);
  }

  function handleBort(value) {
    setBort(value);
  }

  function handleIngrediendCard(id) {
    if (selectedIngredients.includes(id)) {
      setSelectedIngredients(selectedIngredients.filter((item) => item !== id));
    } else {
      if (selectedIngredients.length >= 40) {
        selectedIngredients.shift();
      }
      setSelectedIngredients([...selectedIngredients, id]);
    }
  }

  let totalPrice = useMemo(
    () =>
      selectedIngredients.reduce(
        (a, b) => a + ingredients.find((item) => item.id === b).price,
        0
      ) + product.price,
    [selectedIngredients]
  );

  let changedThinknesList = useMemo(
    () =>
      size === "small"
        ? thinknesList.filter((item) => item.value !== "thin")
        : thinknesList,
    [size]
  );

  let changedBort = useMemo(
    () =>
      size !== "large"
        ? "Mavjud emas"
        : selectOptions.find((item) => item.value === bort).label,
    [bort, size]
  );

  function handleAdd() {
    let newProduct = {
      ...product,
      size,
      bort,
      thinknes,
      price: totalPrice,
      ingredients: ingredients.filter((item) =>
        selectedIngredients.includes(item.id)
      ),
      qty: 1,
    };

    addToCart(newProduct);
    onClose();
  }

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
        <div className="product-modal__content">
          <div className="product-modal__info">
            <div className="product-modal__image">
              <img src={product?.image} alt={product?.title} />
            </div>
            <h3 className="product-modal__title product-modal__title_large">
              {product?.title}
            </h3>
            <p className="product-modal__subtitle">{product?.subtitle}</p>
          </div>
          <div className="product-modal__selected">
            <div className="product-modal__selected_item">
              <h3 className="product-modal__title product-modal__title_small">
                Tanlangan bort:
              </h3>
              <p className="product-modal__subtitle">{changedBort}</p>
            </div>
            <div className="product-modal__selected_item">
              <h3 className="product-modal__title product-modal__title_small">
                Masalliqlar:
              </h3>
              <p className="product-modal__subtitle">
                {selectedIngredients.length <= 0
                  ? "Tanlanmagan"
                  : selectedIngredients
                      .map(
                        (id) => ingredients.find((item) => item.id === id).title
                      )
                      .join(" ")}
              </p>
            </div>
          </div>
          <div className="poruduct-modal__price">
            <h3 className="product-modal__title product-modal__title_large">
              {totalPrice.toLocaleString("ru-Ru")} so'm
            </h3>
          </div>
        </div>
        <div className="product-modal__row">
          <div className="product-modal__size">
            <h3 className="product-modal__title product-modal__title_medium">
              Pitsa kattaligi
            </h3>
            <RadioButtons list={sizeList} onChange={handleSizeChange} />
            <div className="product-modal__size_row">
              <div className="product-modal__size_col">
                <RadioButtons
                  list={changedThinknesList}
                  onChange={handleThinknesChange}
                />
              </div>
              <div className="product-modal__size_col">
                <Select
                  options={selectOptions}
                  defaultValue={selectOptions[0].value}
                  onChange={handleBort}
                  disabled={size !== "large"}
                />
              </div>
            </div>
          </div>
          <div className="product-modal__ingredient ingredient__product-modal">
            <div className="ingredient-title__row">
              <h3 className="product-modal__title product-modal__title_medium">
                Masalliqlarni tanlang
              </h3>
              <span className="ingredient-badge">
                {selectedIngredients.length} / 40
              </span>
            </div>

            <div className="ingredient-list">
              {ingredients.map((item) => (
                <div
                  className={
                    selectedIngredients.includes(item.id)
                      ? "ingredient-card active"
                      : "ingredient-card"
                  }
                  key={item.id}
                  onClick={() => handleIngrediendCard(item.id)}
                >
                  <div className="ingredient-card__image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <p className="ingredient-card__title">{item.title}</p>
                  <strong className="ingredient-card__price">
                    {item.price}
                  </strong>
                  <button className="ingredient-card__button">
                    <PlusIcon />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button className="product-modal__add" onClick={handleAdd}>
            Savatga qo'shish
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
