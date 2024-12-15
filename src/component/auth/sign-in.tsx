import { signIn } from "@/lib/auth";
import React from "react";

export const SignInButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit" className="">
        GOOGLEでサインイン
      </button>
    </form>
  );
};
