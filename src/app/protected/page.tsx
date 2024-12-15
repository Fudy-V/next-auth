import Link from "next/link";
import React from "react";

const ProtectedPage = () => {
  return (
    <div>
      <h1>ProtectedPage</h1>
      <Link href={"./"}>
        <button className=" rounded-md bg-red-300 p-2 font-bold ">Home</button>
      </Link>
    </div>
  );
};

export default ProtectedPage;
