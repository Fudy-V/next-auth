import { signIn } from "@/lib/auth";
import React from "react";

export const SignInButton = ({ provider }: { provider: string }) => {
  const Button = ({ provider }: { provider: string }) => (
    <button type="submit" className=" block font-bold bg-gray-100 border border-black ">
      {`${provider}でサインイン`}
    </button>
  );

  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
      className="w-full flex justify-center"
    >
      <Button provider={provider} />
    </form>
  );
};
