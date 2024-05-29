"use client";

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
import { faker } from "@faker-js/faker";
import { ArchiveIcon, TrashIcon } from "lucide-react";
import * as React from "react";

export type JourneyStatus = {
  value: string;
  label: string;
};

type TagType = {
  label: string;
  color: string;
};

const tags: TagType[] = Array.from({ length: 10 }).map(() => ({
  label: faker.lorem.word(),
  color: faker.color.rgb(),
}));

export function TagsBox() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedTags, setSelectedTags] = React.useState<TagType[] | null>([]);

  const handleAddTag = (tag: TagType) => {
    setSelectedTags((prev) => {
      if (!prev) {
        return [tag];
      }
      return [...prev, tag];
    });
  };

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="justify-start gap-1">
            {selectedTags && selectedTags.length > 0 ? (
              <>
                {selectedTags.map((tag) => (
                  <Badge
                    key={tag.label}
                    style={{
                      backgroundColor: tag.color,
                    }}
                  >
                    {tag.label}
                  </Badge>
                ))}
                <Button
                  variant="ghost"
                  size={"xs"}
                  onClick={() => setSelectedTags(null)}
                  className="p-1"
                >
                  <TrashIcon className="h-3 w-3" />
                </Button>
              </>
            ) : (
              "Tags"
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <TagsList setOpen={setOpen} handleAddTag={handleAddTag} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Tags</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <TagsList setOpen={setOpen} handleAddTag={handleAddTag} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function TagsList({
  setOpen,
  handleAddTag,
}: {
  setOpen: (open: boolean) => void;
  handleAddTag: (tag: TagType) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter tags..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {tags.map((tag) => (
            <CommandItem
              key={tag.label}
              value={tag.label}
              onSelect={() => {
                handleAddTag(tag);
                setOpen(false);
              }}
            >
              <Badge
                style={{
                  backgroundColor: tag.color,
                }}
              >
                {tag.label}
              </Badge>
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
