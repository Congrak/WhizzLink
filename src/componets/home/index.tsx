"use client";

import { FormattedMessage } from "react-intl";
import style from "./home.module.css";
import { useCallback, useEffect, useState } from "react";
import { Tab } from "../common/tab";
import { TABS_NAVIGATION } from "@/contants";
import { Blocks } from "../blocks";
import { Note } from "../note";
import { Session } from "inspector";
import { useSession } from "next-auth/react";
import Image from "next/image";

export const Home = () => {
  const [currenType, setCurrenType] = useState<
    "qr" | "link" | "mylinks" | "myqrcodes"
  >("link");
  const [animate, setAnimate] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timeout);
  }, [currenType]);

  const handleClick = useCallback(
    (type: "qr" | "link" | "mylinks" | "myqrcodes") => {
      return () => setCurrenType(type);
    },
    []
  );

  return (
    <div className={style.container}>
      {session && (
        <div className={style.welcome}>
          <Image
            src={session.user?.image || ""}
            width={30}
            height={30}
            alt="Avatar"
            className={style.avatar}
          />
          <FormattedMessage id="welcome" defaultMessage="Welcome" />
          &nbsp;{session.user?.name}
        </div>
      )}
      <h1 className={style.title}>
        <FormattedMessage
          id="home.title"
          defaultMessage="WhizzLink: Shorten, Transform, Conect"
        />
      </h1>
      <p className={style.text}>
        <FormattedMessage
          id="home.text"
          defaultMessage="Unlock the power of open-source technology to swiftly create and manage short URLs or QR codes with just a click. Experience a fast, secure, and intuitive platform that simplifies your digital interactions."
        />
      </p>
      <div className={style.content}>
        <div className={style.navigation}>
          {TABS_NAVIGATION.map(
            ({ type, icon: Icon, messageId, defaultMessage }) => (
              <Tab
                key={type}
                type={type}
                currenType={currenType}
                handleClick={handleClick}
                Icon={Icon}
                messageId={messageId}
                defaultMessage={defaultMessage}
              />
            )
          )}
        </div>
        <div className={animate ? style.formAnimate : ""}>
          <Blocks type={currenType} />
        </div>
      </div>
      <Note />
    </div>
  );
};
