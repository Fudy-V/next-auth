import { SignInButton } from "@/component/auth/signInButton";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  //   console.log(session);
  if (session === null) {
    return (
      <div className="h-[100vh]">
        <h1>ログインが必要です</h1>
        <SignInButton provider="Google" />
      </div>
    );
  } else redirect("../");

  return (
    <div>
      <Link href={"./"}>
        <button className=" rounded-md bg-red-300 p-2 font-bold ">Home</button>
      </Link>
      <SignInButton provider="Google" />
    </div>
  );
};

export default page;
