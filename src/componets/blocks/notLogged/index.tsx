"use client";

import { FormattedMessage } from "react-intl";
import style from "./notLogged.module.css";
import { ModalSign } from "@/componets/modal";
import { Login } from "@/componets/login";

export const NotLogged = () => {
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>
        <FormattedMessage
          id="home.notLogged.title"
          defaultMessage="Unlock Your Creations!"
        />
      </h3>
      <p className={style.text}>
        <FormattedMessage
          id="home.notLogged.text"
          defaultMessage="Sign in now to access and manage all your saved links and QR codes. Experience the convenience of having your personalized dashboard at your fingertips. Don't miss out on this exclusive feature: sign in and take full control of your digital content today. Your journey to effortless organization starts here!"
        />
      </p>
      <ModalSign
            where="home"
            buttonText={
              <FormattedMessage
                id="button.getStarted"
                defaultMessage="Get Started"
              />
            }
          >
            <Login />
          </ModalSign>
    </div>
  );
};
