"use client";

import Link from "next/link";
import { GitHubLogo } from "../common/icons/github";
import { LinkedinLogo } from "../common/icons/linkedin";
import style from "./footer.module.css";
import { FormattedMessage } from "react-intl";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style.made}>
        <FormattedMessage
          id="footer.made"
          defaultMessage="Made by Rodrigo Celis © 2024"
        />
      </p>
      <div className={style.links}>
        <Link href="https://github.com/Congrak/WhizzLink" target="_blank">
          <GitHubLogo width={20} height={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/rodrigo-celis-zamora/"
          target="_blank"
        >
          <LinkedinLogo width={20} height={20} />
        </Link>
      </div>
    </footer>
  );
};
