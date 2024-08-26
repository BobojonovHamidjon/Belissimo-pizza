import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { sizeUz } from "../../constants/data";

function CartPage() {
  const { cart, incrementItem, decrementItem, deleteItem } =
    useContext(CartContext);

  console.log(cart);

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-row">
          <div className="cart-list">
            {cart.length <= 0 ? (
              <h1>Savatcha bo'sh</h1>
            ) : (
              cart.map((item, key) => (
                <div className="cart-card" key={key}>
                  <div className="cart-card__image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-card__content">
                    <h4 className="cart-card__title">
                      {item.title} {sizeUz[item.size]}
                    </h4>
                    <p className="cart-card__subtitle">
                      + {item.ingredients?.map((item) => item.title).join(", ")}
                    </p>
                  </div>
                  <div className="cart-card__actions">
                    <div className="counter">
                      <button
                        className="counter-button"
                        onClick={() =>
                          item.qty <= 1
                            ? deleteItem(item.cart_id)
                            : decrementItem(item.cart_id)
                        }
                      >
                        - 
                      </button>
                      <span>{item.qty}</span>
                      <button
                        className="counter-button"
                        onClick={() => incrementItem(item.cart_id)}
                      >
                        +
                      </button>
                    </div>
                    <h3 className="cart-card__price">{item.price}</h3>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="cart-info"></div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
