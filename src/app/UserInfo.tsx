"use client";

import { SessionProvider, useSession } from "next-auth/react";

export const UserInfo = () => {
  const { data } = useSession();
  console.log({ data });

  return (
    <div>
      <h1>User Info</h1>
      <p>user-name:{data?.user.name}</p>
      <p>user-email:{data?.user.email}</p>
    </div>
  );
};

export const SessionProviderNew = (props: any) => {
  return <SessionProvider {...props} />;
};
