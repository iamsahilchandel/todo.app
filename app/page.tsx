import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo App</h1>
      <Button variant={"destructive"}>Click Me!</Button>
    </main>
  );
}
