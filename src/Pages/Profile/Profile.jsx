import React from "react";
import styles from "./Profile.module.scss";
import sale from "../../images/sale.png";
import { Link } from "react-router-dom";
import { PatternFormat } from "react-number-format";

export const Profile = () => {
  const current = 17200;
  const next = 30000;
  const percent = (17200 * 100) / 30000;

  return (
    <div className={styles.profile}>
      <div className={styles.profile_top}>
        <h1 className={styles.profile_top_title}>Иванов Иван Иванович</h1>
        <div className={styles.profile_top_sale}>
          <img src={sale} alt="" />
          <div className={styles.profile_top_sale_bottom}>
            <h1>Ваша скидка 5%</h1>
            <p>Купите товаров на сумму {next} ₽ и получите скидку 10%</p>
            <div className={styles.profile_top_sale_bottom_process}>
              <span>Куплено товаров на сумму {current} ₽</span>
              <div className={styles.profile_top_sale_line}>
                <div style={{ width: `${percent}%` }}></div>
              </div>
            </div>
            <Link>Подробнее о накопительной программе</Link>
          </div>
        </div>
      </div>
      <div className={styles.profile_personality}>
        <h1>Персональная информация</h1>
        <form className={styles.profile_form}>
          <label className={styles.profile_form_label}>
            <p>Фамилия</p>
            <input type="text" defaultValue={data.surname} name="surname" />
          </label>
          <label className={styles.profile_form_label}>
            <p>Имя</p>
            <input type="text" defaultValue={data.name} name="name" />
          </label>
          <label className={styles.profile_form_label}>
            <p>Отчество</p>
            <input
              defaultValue={data.patronomic}
              type="text"
              name="patronomic"
            />
          </label>
          <label className={styles.profile_form_label}>
            <p>Номер телефона</p>
            <PatternFormat
              defaultValue={data.phone}
              format="+7 (###) ### ##-##"
              allowEmptyFormatting
              mask="_"
              name="phone"
            />
          </label>
          <label className={styles.profile_form_label}>
            <p>E-mail</p>
            <input defaultValue={data.email} type="email" name="email" />
          </label>
        </form>
      </div>
    </div>
  );
};

const data = {
  surname: "Иванов",
  name: "Иван",
  patronomic: "Иванович",
  phone: "+7 (000) 00-00-00",
  email: "sameemail@mail.com",
};
