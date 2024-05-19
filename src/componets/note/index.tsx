import Link from "next/link";
import { FormattedMessage } from "react-intl";
import style from "./note.module.css";

export const Note = () => {
  return (
    <div>
      <p className={style.note}>
        <FormattedMessage
          id="home.note"
          defaultMessage="Note: If you find a bug, please report it: "
        />
        &nbsp;
        <Link
          href="https://github.com/Congrak/WhizzLink/issues"
          target="_blank"
          className={style.link}
        >
          <FormattedMessage id="link" defaultMessage="click here" />
        </Link>
      </p>
    </div>
  );
};
