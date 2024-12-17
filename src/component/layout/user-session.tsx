import { Session } from "next-auth";
import Image from "next/image";
import React from "react";

const UserSession = ({ session }: { session: Session }) => {
  const imageUrl = session.user?.image ?? "/user.png";
  return (
    <div className="flex flex-row gap-10 pt-3">
      <div className="">
        <Image
          src={imageUrl}
          alt={JSON.stringify(session.user?.name)}
          width={100}
          height={100}
          priority
        />
      </div>
      <div>
        <h1>
          名前:
          <span className="pl-3 bg-slate-200">{JSON.stringify(session.user?.name)}</span>
        </h1>
        <p>Email:{JSON.stringify(session.user?.email)}</p>
      </div>
    </div>
  );
};

export default UserSession;
