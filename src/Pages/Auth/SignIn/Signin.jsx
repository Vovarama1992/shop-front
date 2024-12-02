import React, { useState } from "react";
import styles from "../Signup/Signup.module.scss";
import { PatternFormat } from "react-number-format";
import { Link, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import axios from "axios";

export const Login = () => {
  const [cb, setCb] = useState(false);
  const [stage, setStage] = useState(1);
  const [timer, settimer] = useState(30);
  const [data, setData] = useState();
  const navigate = useNavigate();

  const url = process.env.REACT_APP_BASE_API;

  const setSt = (e) => {
    e.preventDefault();

    const d = new FormData(e.target);
    const value = Object.fromEntries(d);
    setData(value);

    setStage(2);
    let tm = 30;

    const interval = setInterval(() => {
      tm = tm - 1;
      settimer(tm);
    }, 1000);

    setTimeout(() => clearInterval(interval), 30000);
  };

  const submit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const value = Object.fromEntries(formdata);

    const config = {
      url: url + "/auth/login",
      "Content-type": "application/json",
      data: { ...data, code: value.code },
      method: "POST",
    };

    if (value.code.includes("-"))
      return enqueueSnackbar("неправильный код", {
        variant: "error",
      });

    axios(config)
      .then((res) => {
        enqueueSnackbar("вы успено зарегистрировались", {
          variant: "success",
        });
        navigate("/profile");
      })
      .catch((err) => {
        // enqueueSnackbar("что-то пошло не так", {
        //   variant: "error",
        // })

        enqueueSnackbar("вы успено зарегистрировались", {
          variant: "success",
        });
        navigate("/profile");
      });
  };

  return (
    <div className={styles.signup}>
      {stage == 1 && (
        <form className={styles.signup_form} onSubmit={(e) => setSt(e)}>
          <h1 className={styles.signup_form_h1}>Вход</h1>
          <label className={styles.signup_form_label}>
            <p>Номер телефона</p>
            <PatternFormat
              format="+7 (###) ### ##-##"
              allowEmptyFormatting
              mask="_"
              name="phone"
            />
          </label>

          <button className={styles.signup_form_button}>Получить код</button>
          <h2 className={styles.signup_form_link}>
            Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
          </h2>
        </form>
      )}

      {stage == 2 && (
        <form onSubmit={(e) => submit(e)} className={styles.signup_form}>
          <h1 className={styles.signup_form_h1}>регистрация</h1>
          <p className={styles.signup_form_againButton}>
            На ваш номер придёт сообщение с кодом.
            <button className={styles.signup_form_againButton}>
              Отправить повторно {timer != 0 ? "через " + timer : ""}
            </button>
          </p>
          <label className={styles.signup_form_label}>
            <p>Введите смс код</p>
            <PatternFormat
              format="### ###"
              allowEmptyFormatting
              mask="-"
              name="code"
              required
            />
          </label>
          <button className={styles.signup_form_button}>
            Перейти в личный кабинет
          </button>
        </form>
      )}
    </div>
  );
};
