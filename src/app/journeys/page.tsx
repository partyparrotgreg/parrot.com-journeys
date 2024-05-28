import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JourneyPageGroup() {
  return (
    <main className="flex flex-col gap-8">
      <div className="relative flex flex-row justify-between">
        <h1 className="text-pretty text-2xl font-semibold">Journeys</h1>
        <div className="flex flex-row gap-2">
          <Link href="/journeys/templates">
            <Button variant={"outline"} className="gap-2">
              <span>Templates</span> <Badge>12</Badge>
            </Button>
          </Link>
          <Button>New</Button>
        </div>
      </div>
      <div>Header</div>
      <div className="grid grid-cols-3 gap-6"></div>
    </main>
  );
}
