import { FormattedMessage } from "react-intl";
import { Button } from "../common/button";
import { GitHubLogo } from "../common/icons/github";
import { GoogleLogo } from "../common/icons/google";
import { signIn } from "next-auth/react";
import style from "./login.module.css";

export const Login = () => {

    return (
        <>
          <h2>
            <FormattedMessage id="button.signIn" defaultMessage="Sign In" />
          </h2>
          <p className={style.subtitle}>
            <FormattedMessage
              id="modal.subtitle"
              defaultMessage="Sign in to save your links and access them whenever you want."
            />
          </p>
          <br />
          <div className={style.buttonContainer}>
            <Button type="outline" onClick={() => signIn("google")}>
              <GoogleLogo width={20} height={20} />
              <FormattedMessage
                id="button.google"
                defaultMessage="Sign in with Google"
              />
            </Button>
            <Button type="outline" onClick={() => signIn("github")}>
              <GitHubLogo width={20} height={20} />
              <FormattedMessage
                id="button.github"
                defaultMessage="Sign in with GitHub"
              />
            </Button>
          </div>
        </>
    );
}