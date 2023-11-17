import React from "react";
import { NavLink } from "react-router-dom";
import HeartIcon from "./icons/HeartIcon";
import PersonIcon from "./icons/PersonIcon";

import Logo from "../assets/icons/headerLogo.png";
import SearchIcon from "./icons/SearchIcon";

function Header() {
  const Links = [
    {
      id: 1,
      path: "/male",
      text: "Мужское",
    },
    {
      id: 2,
      path: "/womens",
      text: "Женское",
    },
    {
      id: 3,
      path: "/kids",
      text: "Детские ",
    },
    {
      id: 4,
      path: "/safe",
      text: "Безопасная Сделка",
    },
    {
      id: 5,
      path: "/rule",
      text: "Правило Пользование",
    },
  ];

  return (
    <div className="header">
      <div className="header__row container">
        <img className="header__logo" src={Logo} alt="logo" />

        <nav className="header__nav">
          {Links.map((item) => {
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "header__link header__link-active" : "header__link"
                }
              >
                {item.text}
              </NavLink>
            );
          })}
        </nav>

        <div className="header__icons">
          <HeartIcon className="header__icons-icon header__icons-icon1" />
          <PersonIcon className="header__icons-icon" />
        </div>

        <button className="header__btn">Contact Us</button>
      </div>

      <div className="header__search">
        <SearchIcon className="header__search-icon" />
        <p>
          Поиск продукта, бренда или продавца... Поиск продукта, бренда или
          продавца... Поиск продукта, бренда или продавца...{" "}
        </p>
      </div>
    </div>
  );
}
export default Header;
