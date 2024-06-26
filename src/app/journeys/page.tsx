import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArchiveIcon } from "lucide-react";
import Link from "next/link";
import { JourneysTable } from "./_components/journeys-table";
import { type JourneyType } from "./_data";

export default async function JourneyPageGroup() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return (
    <main className="flex flex-col gap-8">
      <div className="relative flex flex-row justify-between">
        <h1 className="text-pretty text-2xl font-semibold">Journeys</h1>
        <div className="flex flex-row gap-2">
          <Link href="/journeys/archive">
            <Button variant={"ghost"} className="gap-2">
              <ArchiveIcon size={16} />
            </Button>
          </Link>
          <Link href="/journeys/templates">
            <Button variant={"outline"} className="gap-2">
              <span>Templates</span> <Badge>12</Badge>
            </Button>
          </Link>
          <Button>New</Button>
        </div>
      </div>
      <div>
        <JourneysTable  />
      </div>
    </main>
  );
}
