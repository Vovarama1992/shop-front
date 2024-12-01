import React from "react";
import styles from "./Header.module.scss";
import logo from "../../images/logo.png";
import search from "../../images/svg.svg";
import profile from "../../images/svg (1).svg";
import cart from "../../images/svg (2).svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_sect}>
        <img className={styles.header_logo} src={logo} />
        <Link to={"/catalog"}>Каталог</Link>
        <Link to={"/about"}>О нас</Link>
        <Link to={"/contacts"}>Контакты</Link>
        <Link to={"/delivery"}>Доставка</Link>
      </div>
      <div className={styles.header_sect}>
        <Link to={"/search"}>
          <img src={search} />
        </Link>
        <Link to={"/profile"}>
          <img src={profile} />
        </Link>
        <Link to={"/cart"}>
          <img src={cart} />
        </Link>
      </div>
      <button className={styles.header_menu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};
