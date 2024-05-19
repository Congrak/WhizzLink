"use client";

import { Login } from "@/componets/login";
import { ModalSign } from "@/componets/modal";
import { createLink } from "@/service/createLink";
import { saveQR } from "@/service/saveQR";
import { validateUrl } from "@/utils/UrlValidator";
import { createQR } from "@/utils/createQR";
import { Button } from "@/componets/common/button";
import { useSession } from "next-auth/react";
import { useCallback, useState } from "react";
import { FormattedMessage } from "react-intl";
import style from "./creation.module.css";
import { ShowQR } from "@/componets/showQR";
import Link from "next/link";

export const Creation = ({ currenType }: { currenType: "link" | "qr" }) => {
  const [url, setUrl] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [shorted, setShorted] = useState<string>("");
  const [generateQR, setGenerateQR] = useState<string>("");

  const { data: session } = useSession();
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    setIsValid(validateUrl(newUrl));
  }, []);

  const handleSubmit = useCallback(() => {
    if (isValid) {
      if (currenType === "link") {
        (async function () {
          const res = await createLink(url, session?.user?.id!);
          setShorted(res.newLink.shorted);
        })();
      } else {
        (async function () {
          const qr = await createQR(url);
          if (!qr) return console.error("Error creating QR code");
          const res = await saveQR(qr, url, session?.user?.id!);
          setGenerateQR(qr);
        })();
      }
    }
  }, [currenType, isValid, session?.user?.id, url]);
  return (
    <>
      <h3 className={style.title}>
        <FormattedMessage
          id={currenType === "link" ? "home.subtitle.link" : "home.subtile.qr"}
          defaultMessage="Transform Your Long URL into a Sleek, Manageable Link"
        />
      </h3>
      <input
        className={style.input}
        type="text"
        placeholder="Insert your link."
        value={url}
        onChange={handleChange}
      />
      {!isValid && (
        <p className={style.error}>
          <FormattedMessage
            id="home.error.url"
            defaultMessage="Please enter a valid URL."
          />
        </p>
      )}
      {shorted !== "" && currenType === "link" && (
        <p className={style.success}>
          <FormattedMessage
            id="home.success.link"
            defaultMessage="Shortened Link: "
          />
          <Link href={process.env.NEXT_URL + shorted} target="_blank" className={style.link}>
            {process.env.NEXT_URL + shorted}
          </Link>
        </p>
      )}

      <div className={style.buttonWrapper}>
        {session ? (
          <>
            <Button type="orange" onClick={handleSubmit} isValid={!isValid}>
              <FormattedMessage
                id={
                  currenType === "link" ? "button.shorten" : "button.createqr"
                }
                defaultMessage={"Shorten Link"}
              />
            </Button>
            {generateQR !== "" && currenType === "qr" && (
              <ShowQR QR={generateQR} />
            )}
          </>
        ) : (
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
        )}
      </div>
    </>
  );
};
