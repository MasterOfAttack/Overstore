import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/*eslint-disable-next-line jsx-a11y/alt-text*/}
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header__search">
        <input className="hedaer__searchInput" type="text" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineOne">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineOne">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">You're</span>
          <span className="header__optionLineOne">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
