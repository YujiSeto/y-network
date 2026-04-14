"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SignupForm = () => {
  const router = useRouter();
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSignup = () => {
    router.replace("/home");
  };

  return (
    <>
      <Input
        placeholder="Type your name"
        value={nameField}
        onChange={(t) => setNameField(t)}
      />
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
      <Button label="Sign Up" onClick={handleSignup} size="lg" />
    </>
  );
};
