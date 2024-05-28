import { Button } from "@/components/ui/button";

export default function JourneyPageGroup() {
  return (
    <main>
      <div className="relative flex min-h-screen flex-row justify-between">
        <h1 className="text-pretty text-xl font-semibold">Journey</h1>
        <div className="flex flex-row gap-2">
          <Button variant={"outline"}>New</Button>
          <Button>New</Button>
        </div>
      </div>
    </main>
  );
}
