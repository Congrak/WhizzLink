"use client";

import { FormattedMessage } from "react-intl";
import { Settings } from "../common/icons/settings";
import { ModalSign } from "../modal";
import style from "./settings.module.css";
import { LinkObject } from "@/types/globalTypes";
import { Button } from "../common/button";
import { useCallback, useEffect, useState } from "react";
import { updateLink } from "@/service/updateLInk";
import { notify } from "@/utils/notify";
import { validateShorted } from "@/utils/shortedValidator";

export const SettingsLink = ({
  data,
  setChange,
}: {
  data: LinkObject;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [newShorted, setNewShorted] = useState("");
  const [open, setOpen] = useState(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
  }, [data]);

  const handleSubmit = useCallback(async () => {
    setError(null);
    if (!isValid) {
      return setError("error.valid");
    }
    try {
      const res = await updateLink(
        data.id,
        data.creatorId,
        data.shorted,
        newShorted
      );
      if (res.error) {
        setError(res.error);
        setChange(false);
        setOpen(false);
        return notify(res.error, "❌");
      }
      notify("Link updated", "✅");
      setChange(true);
      setOpen(true);
    } catch (error) {
      setError("error.updating");
      setChange(false);
      setOpen(false);
      return notify("Error updating link", "❌");
    }
  }, [data.creatorId, data.id, data.shorted, isValid, newShorted, setChange]);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const shorted = e.target.value;
      setNewShorted(shorted);

      if (!validateShorted(shorted)) {
        setError("error.validation");
        setIsValid(false);
        return "";
      }

      return setIsValid(true);
    },
    []
  );

  return (
    <ModalSign
      where="setting"
      icon={<Settings width={20} height={20} color="#FFFFFF" />}
      forceClose={open}
      buttonText={
        <FormattedMessage id="settings.button" defaultMessage="Edit Link" />
      }
    >
      <div className={style.container}>
        <h3 className={style.title}>
          <FormattedMessage
            id="settings.title"
            defaultMessage="Link Settings"
          />
        </h3>
        <div>
          <label htmlFor="shorted" className={style.label}>
            {data.url}
          </label>
          <input
            type="text"
            id="shorted"
            className={style.input}
            placeholder={`/${data.shorted}`}
            onChange={handleOnChange}
          />
          {error !== null && newShorted !== "" && (
            <p className={style.error}>
              <FormattedMessage id={error} />
            </p>
          )}
        </div>
        <div className={style.buttonWrapper}>
          <Button type="outline" onClick={handleSubmit} isValid={!isValid}>
            <FormattedMessage id="button.save" defaultMessage="Save" />
          </Button>
        </div>
      </div>
    </ModalSign>
  );
};
