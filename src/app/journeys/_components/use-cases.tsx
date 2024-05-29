"use client";

import * as React from "react";

import { Badge } from "@/components/ui/badge";
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
import { ArchiveIcon, CheckIcon, TrashIcon } from "lucide-react";

export type UseCaseType = {
  value: string;
  name: string;
};

const useCases: UseCaseType[] = [
  { name: "Cart Abandoned", value: "cart-abandoned" },
  { name: "Welcome", value: "welcome" },
  { name: "Winback", value: "winback" },
  {
    name: "Nurture subscriber",
    value: "nurture-subscriber",
  },
  { name: "Post purchase", value: "post-purchase" },
  { name: "Shopify", value: "shopify" },
] as const;

export function UseCasesBox() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedUseCases, setSelectedUseCases] = React.useState<
    UseCaseType[] | null
  >([]);

  const handleAddUseCase = (useCase: UseCaseType) => {
    setSelectedUseCases((prev) => {
      if (!prev) {
        return [useCase];
      }
      if (prev.find((item) => item.value === useCase.value)) {
        return prev.filter((item) => item.value !== useCase.value); // Remove if already selected
      }
      return [...prev, useCase];
    });
  };

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">
            Use cases{" "}
            {selectedUseCases && selectedUseCases.length > 0 && (
              <Badge className="ml-2" variant={"secondary"}>
                {selectedUseCases?.length}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <UseCaseList
            setOpen={setOpen}
            setSelected={handleAddUseCase}
            selectedUseCases={selectedUseCases}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          Use cases
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <UseCaseList
            setOpen={setOpen}
            setSelected={handleAddUseCase}
            selectedUseCases={selectedUseCases}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function UseCaseList({
  setOpen,
  setSelected,
  selectedUseCases,
}: {
  setOpen: (open: boolean) => void;
  setSelected: (useCase: UseCaseType) => void;
  selectedUseCases: UseCaseType[] | null;
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter use cases..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {useCases.map((useCase) => {
            const isSelected = selectedUseCases?.find(
              (item) => item.value === useCase.value,
            );
            return (
              <CommandItem
                key={useCase.value}
                value={useCase.value}
                onSelect={() => {
                  setSelected(useCase);
                  setOpen(false);
                }}
              >
                <span className="flex grow">{useCase.name}</span>
                {isSelected && <CheckIcon size={16} className="mr-1" />}
              </CommandItem>
            );
          })}
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
