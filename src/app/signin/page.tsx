import { SignInButton } from "@/component/auth/sign-in";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href={"./"}>
        <button className=" rounded-md bg-red-300 p-2 font-bold ">Home</button>
      </Link>
      <SignInButton />
    </div>
  );
};

export default page;
