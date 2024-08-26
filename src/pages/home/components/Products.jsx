import React from "react";
import { ProductCard } from "../../../components";
import { Link } from "react-router-dom";

function Products({ list, title, handleOpen }) {
  return (
    <div className="products">
      <div className="container">
        <div className="products-title">
          <h3 className="products-title__title">{title}</h3>
        </div>

        <div className="products-list">
          {list.map((item, key) =>
            item.isCombo ? (
              <Link
                to={`/combo/${item.id}`}
                className="products-card__link"
                key={key}
              >
                <ProductCard product={item} type="kombo" />
              </Link>
            ) : item.isLink ? (
              <Link to={item.path} className="products-card__link" key={key}>
                <ProductCard product={item} type="kombo" />
              </Link>
            ) : (
              <ProductCard
                key={key}
                product={item}
                type="kombo"
                handleOpen={handleOpen}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
