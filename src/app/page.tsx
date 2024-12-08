import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Textarea } from "@/components/Textarea"
export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <form action="" className="w-full max-w-xl flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" placeholder="App Name"></Input>
        <Textarea name="description" placeholder="App Description"></Textarea>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
