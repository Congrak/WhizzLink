import { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import { Button } from "../common/button";
import style from "./modal.module.css";

export const ModalSign = ({
  where,
  buttonText,
  children,
  icon,
  forceClose,
}: {
  where: "home" | "navbar" | "showQR" | "setting";
  buttonText?: React.ReactNode;
  children: React.ReactElement;
  icon?: React.ReactNode;
  forceClose?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const handleOpenInside = () => {
    setOpen(true);
  };

  const handleCloseInside = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (forceClose) {
      setOpen(false);
    }
  }, [forceClose]);

  return (
    <div>
      {where === "setting" ? (
        <div onClick={handleOpenInside} className={style.icon}>{icon}</div>
      ) : (
        <Button
          type={where === "home" ? "orange" : "outline"}
          onClick={session && where === "navbar" ? () => signOut() : handleOpenInside}
        >
          {buttonText}
        </Button>
      )}

      <Modal
        open={open}
        onClose={forceClose ? () => setOpen(false) : handleCloseInside}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={style.modalWrapper}>
          <div className={style.modalContainer}>{children}</div>
        </div>
      </Modal>
    </div>
  );
};
