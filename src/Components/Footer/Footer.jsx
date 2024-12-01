import React from "react";
import styles from "./Footer.module.scss";
import i1 from "../../images/Vector.svg";
import i2 from "../../images/Vector (1).svg";
import i3 from "../../images/vk logo.svg";
import i4 from "../../images/Union.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_sect}>
        <h4>О компании</h4>
        <Link to="/about">О нас</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/stores">Адреса магазинов</Link>
        <Link to="/manufacturers">Производители</Link>
      </div>

      <div className={styles.footer_sect}>
        <h4>Покупателям</h4>
        <Link to="/order">Как оформить заказ</Link>
        <Link to="/payment-rules">Правила оплаты и возврата</Link>
        <Link to="/delivery">Доставка</Link>
        <Link to="/returns">Возврат товара</Link>
        <Link to="/care">Уход за изделиями</Link>
        <Link to="/newsletter">Рассылка</Link>
      </div>

      <div className={styles.footer_sect}>
        <h4>Личный кабинет</h4>
        <Link to="/register">Регистрация</Link>
        <Link to="/order-history">История заказов</Link>
        <Link to="/track-order">Отследить заказ</Link>
        <Link to="/bookmarks">Закладки</Link>
      </div>

      <div className={styles.footer_sect}>
        <p>
          <img src={i1} alt="" />
          Работаем с 10 до 22
        </p>
        <p>
          <img src={i2} alt="" />
          Магазины находятся в Санкт-Петербурге. Бесплатная доставка по России
        </p>
        <p>
          <img src={i3} alt="" />
          maxiscomfort
        </p>
        <p>
          <img src={i4} alt="" />
          info@maxiscomfort
        </p>
      </div>
      <div className={styles.footer_sect}>
        <p> © 0000–2023 Интернет-магазин «Умная Одежда» </p>
        <Link to="/politics">Политика конфиденциальности</Link>
        <Link to="/oferta">Оферта</Link>
      </div>
    </footer>
  );
};

export default Footer;
