"use client";

import { DarkLogo } from "../common/icons/logo/dark";
import style from "./navbar.module.css";
import { ModalSign } from "../modal";
import { FormattedMessage } from "react-intl";
import { useSession } from "next-auth/react";
import { Login } from "../login";

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <DarkLogo width={150} height={61} />
        <div className={style.version}>beta</div>
      </div>
      <div className={style.endElement}>
        <ModalSign
          where="navbar"
          buttonText={
            <FormattedMessage
              id={session ? "button.signOut" : "button.signIn"}
              defaultMessage={session ? "Sign Out" : "Sign In"}
            />
          }
        >
          <Login />
        </ModalSign>
      </div>
    </div>
  );
};
