"use client";

import { FormattedMessage } from "react-intl";
import style from "./empty.module.css";

export const Empty = () => {
  return (
    <div className={style.container}>
      <h2>
        <FormattedMessage id="home.empty.title" defaultMessage="Oooops!! 🚀" />
      </h2>
      <p>
        <FormattedMessage
          id="home.empty.text"
          defaultMessage="✨🔗 It looks like you don't have anything yet. Don't waste any more time and start creating right now! 🔗✨"
        />
      </p>
    </div>
  );
};
