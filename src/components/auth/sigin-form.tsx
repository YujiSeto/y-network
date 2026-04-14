"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSignin = () => {
    router.replace("/home");
  };

  return (
    <>
      <input
        type="email"
        placeholder="Type your email"
        value={emailField}
        onChange={(e) => setEmailField(e.target.value)}
      />
      <input
        type="password"
        placeholder="Type your password"
        value={passwordField}
        onChange={(e) => setPasswordField(e.target.value)}
      />
      <button type="submit" onClick={handleSignin}>
        Sign In
      </button>
    </>
  );
};