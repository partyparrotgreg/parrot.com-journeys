"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ArchiveIcon, TrashIcon } from "lucide-react";

export type JourneyStatus = {
  value: string;
  label: string;
};

const statuses: JourneyStatus[] = [
  {
    value: "live",
    label: "Live",
  },
  {
    value: "draft",
    label: "Draft",
  },
  {
    value: "inactive",
    label: "Inactive",
  },
  {
    value: "archived",
    label: "Archived",
  },
  {
    value: "deleted",
    label: "Deleted",
  },
];

export function StatusBox() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus, setSelectedStatus] =
    React.useState<JourneyStatus | null>(null);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  setOpen,
  setSelectedStatus,
}: {
  setOpen: (open: boolean) => void;
  setSelectedStatus: (status: JourneyStatus | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses
            .filter(
              //only live, draft and inactive statuses are shown
              (status) =>
                status.value !== "archived" && status.value !== "deleted",
            )
            .map((status) => (
              <CommandItem
                key={status.value}
                value={status.value}
                onSelect={(value) => {
                  setSelectedStatus(
                    statuses.find((priority) => priority.value === value) ??
                      null,
                  );
                  setOpen(false);
                }}
              >
                <div className="mr-2">
                  <StatusDot status={status.value} />
                </div>{" "}
                {status.label}
              </CommandItem>
            ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export const StatusDot = ({ status }: { status: string }) => {
  return (
    <div className="relative flex items-center justify-center">
      {status === "live" && (
        <div
          className="h-3 w-3 rotate-45 animate-pulse rounded-sm bg-blue-500"
          title="live"
        />
      )}
      {status === "draft" && (
        <div className="h-3 w-3 rounded-sm bg-orange-500" title="draft" />
      )}
      {status === "inactive" && (
        <div className="h-3 w-3 rounded-full bg-slate-400" title="inactive" />
      )}
      {status === "archived" && <ArchiveIcon className="h-3 w-3" />}
      {status === "deleted" && <TrashIcon className="h-3 w-3" />}
    </div>
  );
};
