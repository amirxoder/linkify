"use client";

import { useAppSelector } from "@/lib/hook";
import SignIn from "./sign-in";
import { Verify } from "./verify";

export const StateAuth = () => {
  const authState = useAppSelector((state) => state.auth.authState);
  return (
    <>
      {authState === "login" && <SignIn />}
      {authState === "verify" && <Verify />}
    </>
  );
};
