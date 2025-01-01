"use client";

import { SessionProvider, SessionProviderProps, useSession } from "next-auth/react";
import { JSX } from "react";

export const UserInfo = () => {
  const { data } = useSession();

  return (
    <div>
      <h1>User Info</h1>
      <p>user-name:{data?.user?.name}</p>
      <p>user-email:{data?.user?.email}</p>
    </div>
  );
};

export const SessionProviderNew = (props: JSX.IntrinsicAttributes & SessionProviderProps) => {
  return <SessionProvider {...props} />;
};
