import React from "react";

function HalfProducts({ products, type, selected, selectProduct }) {
  let otherSide = type === "left" ? "right" : "left";

  const handleClick = (product) => {
    selectProduct(type, product);
  };

  return (
    <div className="half-products">
      <div className="half-products__title">
        <h3>{type === "left" ? "Chap taraf" : "O'ng taraf"}</h3>
      </div>

      <div className="half-products__list">
        {products.map((item) => (
          <div
            key={item.id}
            className={
              item.id === selected[type]?.id
                ? "half-products__card active"
                : item.id === selected[otherSide]?.id
                ? "half-products__card disabled"
                : "half-products__card"
            }
            onClick={() =>
              item.id !== selected[otherSide]?.id && handleClick(item)
            }
          >
            <div className="half-products__card_image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="half-products__card_title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HalfProducts;
