"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSignin = () => {
    router.replace("/home");
  };

  return (
    <>
      <Input
        placeholder="Type your email"
        value={emailField}
        onChange={(t) => setEmailField(t)}
      />
      <Input
        placeholder="Type your password"
        value={passwordField}
        onChange={(t) => setPasswordField(t)}
        password
      />
      <Button label="Sign In" onClick={handleSignin} size="lg" />
    </>
  );
};
