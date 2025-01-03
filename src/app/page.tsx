'use client'

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";

import { UserInfo, SessionProviderNew } from "./UserInfo";
import { useEffect } from "react";
import { trpcClient } from "@/utils/api";

export default function Home() {
  useEffect(() => {
    trpcClient.hello.query()
  }, [])

  return (
    <div className="h-screen flex justify-center items-center">
      <form action="" className="w-full max-w-xl flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" placeholder="App Name"></Input>
        <Textarea name="description" placeholder="App Description"></Textarea>
        <Button type="submit">Submit</Button>
      </form>
      <SessionProviderNew>
        <UserInfo />
      </SessionProviderNew>
    </div>
  );
}
