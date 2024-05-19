"use client";

import { FormattedMessage } from "react-intl";
import style from "./tab.module.css";

interface TabProps {
  type: "link" | "qr" | "mylinks" | "myqrcodes";
  currenType: "link" | "qr" | "mylinks" | "myqrcodes";
  handleClick: (type: "link" | "qr" | "mylinks" | "myqrcodes") => () => void;
  Icon: React.FC<{ width: number; height: number; color: string }>;
  messageId: string;
  defaultMessage: string;
}
export const Tab: React.FC<TabProps> = ({
  type,
  currenType,
  handleClick,
  Icon,
  messageId,
  defaultMessage,
}) => {
  const isChecked = type === currenType;
  return (
    <div
      className={isChecked ? style.navigationBoxChecked : style.navigationBox}
      onClick={handleClick(type)}
    >
      <Icon width={25} height={25} color={isChecked ? "#F4652D" : "#FFFFFF"} />
      <FormattedMessage id={messageId} defaultMessage={defaultMessage} />
    </div>
  );
};
