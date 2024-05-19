"use client";

import { FormattedMessage } from "react-intl";
import { ModalSign } from "../modal";
import Image from "next/image";
import { Button } from "../common/button";
import style from "./showqr.module.css";
import { useCallback } from "react";
import { handleDownload } from "../../utils/handleDownload";

export const ShowQR = ({ QR }: { QR: string }) => {

  const downloadQR = useCallback((QR: string) => {
    return () => handleDownload(QR);
  }, []);

  return (
    <ModalSign
      where="showQR"
      buttonText={
        <FormattedMessage id="button.showQR" defaultMessage="Show QR" />
      }
    >
      <div className={style.wrapper}>
        <Image src={QR} width={200} height={200} alt="QR Code" />
        <Button type="outline" onClick={downloadQR(QR)}>
          <FormattedMessage id="button.download" defaultMessage="Download QR" />
        </Button>
      </div>
    </ModalSign>
  );
};
