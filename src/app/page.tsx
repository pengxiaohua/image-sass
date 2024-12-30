import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";

import { db } from "@/server/db/db";
import { Users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export default async function Home() {
  // const users = await db.query.Users.findMany();
  // way2: like sql style
  const users = await db.select().from(Users).where(eq(Users.name, "JOKER"));

  return (
    <div className="h-screen flex justify-center items-center">
      <form action="" className="w-full max-w-xl flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" placeholder="App Name"></Input>
        <Textarea name="description" placeholder="App Description"></Textarea>
        <Button type="submit">Submit</Button>
      </form>
      {/* TODO:test */}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
