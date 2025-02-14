import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { CartContext } from "../../../context/CartContext";

function Categories({ categories }) {
  const { cart } = useContext(CartContext);
  const categoriesRef = useRef();
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    let firstOffset = categoriesRef.current.offsetTop;
    function scrollWindow(e) {
      if (e.target.scrollingElement.scrollTop > firstOffset) {
        categoriesRef.current.classList.add("active");
      } else if (e.target.scrollingElement.scrollTop < firstOffset) {
        categoriesRef.current.classList.remove("active");
      }
    }

    window.addEventListener("scroll", scrollWindow);

    return () => removeEventListener("scroll", scrollWindow);
  }, []);

  const handleSetActive = (to) => {
    setActiveCategory(list.find((item) => item.value === to).value);
    
  };

  function handleNavigate() {
    navigate("/cart");
  }

  return (
    <div ref={categoriesRef} className="categories">
      <div className="container">
        <div className="categories-row">
          <div className="categories-logo">
            <img src="/images/icon.webp" alt="categories logo" />
          </div>
          <div className="categories-list">
            {categories.map(({ label, id, value }) => (
              <Link
                key={id}
                to={value}
                onSetActive={handleSetActive}
                offset={-74}
                smooth={true}
                spy={true}
                duration={500}
              >
                <button
                  className={
                    activeCategory === value
                      ? "categories-list__button active"
                      : "categories-list__button"
                  }
                >
                  {label}
                </button>
              </Link>
            ))}
          </div>
          <div className="categories-buttons">
            <button className="categories-button" onClick={handleNavigate}>
              Savatcha | {cart.length}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
