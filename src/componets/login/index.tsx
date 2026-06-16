"use client";

import { FormattedMessage } from "react-intl";
import { Button } from "../common/button";
import { GitHubLogo } from "../common/icons/github";
import { GoogleLogo } from "../common/icons/google";
import { signIn } from "next-auth/react";
import style from "./login.module.css";
import { useState } from "react";

export const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<"google" | "github" | null>(null);

  const handleSignIn = async (provider: "google" | "github") => {
    setError(null);
    setLoading(provider);
    try {
      const result = await signIn(provider, { redirect: false });
      if (result?.error) {
        setError("Authentication failed. Please try again.");
      }
    } catch {
      setError("Unexpected error. Please try again.");
    } finally {
      setLoading(null);
    }
  };

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
      {error && <p className={style.error}>{error}</p>}
      <div className={style.buttonContainer}>
        <Button
          type="outline"
          onClick={() => handleSignIn("google")}
          isValid={loading !== null}
        >
          <GoogleLogo width={20} height={20} />
          <FormattedMessage
            id="button.google"
            defaultMessage={loading === "google" ? "Connecting..." : "Sign in with Google"}
          />
        </Button>
        <Button
          type="outline"
          onClick={() => handleSignIn("github")}
          isValid={loading !== null}
        >
          <GitHubLogo width={20} height={20} />
          <FormattedMessage
            id="button.github"
            defaultMessage={loading === "github" ? "Connecting..." : "Sign in with GitHub"}
          />
        </Button>
      </div>
    </>
  );
};
