import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Slash } from "lucide-react";
import { JourneyTemplate } from "../_components/journey-template";
import { campaingTemplates } from "../_data";

export default function JourneyArchivesPage() {
  return (
    <main className="flex flex-col gap-8">
      <div className="relative flex flex-row justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/journeys">Journeys</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Archives</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Button size="xs" variant={"ghost"}>
          Help
        </Button>
      </div>
      <div className="relative flex flex-row justify-between">
        <h1 className="text-pretty text-2xl font-semibold">Archive</h1>
        <div className="flex flex-row gap-2">
          <Button>From scratch</Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {campaingTemplates.map((template, index) => (
          <JourneyTemplate key={index} item={template} />
        ))}
      </div>
    </main>
  );
}
