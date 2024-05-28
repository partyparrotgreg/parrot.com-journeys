"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type Row } from "@tanstack/react-table";
import {
  ArchiveIcon,
  CopyCheck,
  MoreHorizontalIcon,
  MousePointerClick,
  PencilIcon,
  TrashIcon,
} from "lucide-react";
import { toast } from "sonner";
import { type JourneyType } from "../_data";
import { ChannelsDisplay } from "./channels-display";
import { StatusDot } from "./status-box";

export const JourneyItem = ({
  item,
  isLast,
}: {
  item: Row<JourneyType>;
  isLast: boolean;
}) => {
  return (
    <div
      className={cn(
        isLast ? "" : "border-b border-slate-200",
        "flex flex-row items-center justify-start gap-6  px-4 py-3",
      )}
    >
      <div className="inline-flex w-56 flex-col items-start justify-between">
        <div className="text-sm font-semibold leading-normal text-black">
          {item.original.title}
        </div>
        <div className="inline-flex items-start justify-start">
          {item.original.trigger == "Missing trigger" ? (
            <Badge variant={"warning"}>
              <MousePointerClick className="h-4 w-4" /> {item.original.trigger}
            </Badge>
          ) : (
            <Badge variant={"secondary"}>{item.original.trigger}</Badge>
          )}
        </div>
      </div>
      <div className="inline-flex w-32 flex-col items-start justify-center gap-2">
        <ChannelsDisplay channels={item.original.channels} />
      </div>
      <div className="flex grow items-start justify-start gap-[5px]">
        <div className="flex items-start justify-start gap-2">
          {item.original.tags.map((tag) => (
            <Badge key={tag} variant={"secondary"}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="shrink grow basis-0 text-right text-sm font-normal leading-normal text-slate-500">
        5 days ago
      </div>
      <div>
        <StatusDot status={item.original.status} />
      </div>
      <DropdownMenuInline id={item.original.id} />
    </div>
  );
};

const DropdownMenuInline = ({ id }: { id: number }) => {
  const handleOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast("Deleted");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <MoreHorizontalIcon size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <PencilIcon className="mr-2 h-4 w-4" /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CopyCheck className="mr-2 h-4 w-4" /> Duplicate
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ArchiveIcon className="mr-2 h-4 w-4" /> Archive
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600" onClick={handleOnClick}>
          <TrashIcon className="mr-2 h-4 w-4" />
          <span className="">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};