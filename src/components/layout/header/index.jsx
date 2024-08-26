import React from "react";
import { LocationIcon, PhoneIcon } from "../../../assets/icons";
import { Link } from "react-router-dom";
function Header({ onOpen, selectedLocation }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <Link to='/'>
              <img src="/images/logo.webp" alt="site logo" />
            </Link>
          </div>

          <div className="header-info__row">
            <div className="header-info header-location">
              <div className="header-info__box">
                <span className="header-info__icon">
                  <LocationIcon />
                </span>
              </div>

              <div className="header-info__content">
                <p className="header-info__toptitle">Shahar:</p>
                <button className="header-info__title" onClick={onOpen}>
                  {selectedLocation}
                </button>
              </div>
            </div>
            <div className="header-info header-phone">
              <a href="tel:1174" className="header-info__box">
                <span className="header-info__icon">
                  <PhoneIcon />
                </span>
                <span className="header-info__title_small">1174</span>
              </a>

              <div className="header-info__content">
                <p className="header-info__toptitle">Yagona aloqa markazi</p>
              </div>
            </div>
            <div className="header-info header-delivary">
              <div className="header-info__box">
                <span className="header-info__title_small">24/7</span>
                <span className="header-info__text">
                  Bepul yetkazish endi 24/7 mavjud
                </span>
              </div>
            </div>
          </div>

          <div className="header-buttons">
            <div className="header-halal">
              <img src="/images/halal.webp" alt="halal image" />
            </div>
            <Link to="/login">
              <button className="header-button">Kirish</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
