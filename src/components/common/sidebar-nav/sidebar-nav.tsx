"use client";

import { cn } from "@/lib/utils";
import { Building2, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { ScrollArea } from "../../ui/scroll-area";
import { navigation, settings } from "./nav";
import { NavItem, type IconType } from "./nav-item";
import { LabelDescription } from "../label-description";

export const SidebarNav = () => {
  return (
    <div className="fixed flex h-full w-[300px] flex-col items-start justify-start border-r border-slate-200 bg-blue-50">
      <UserCompany />
      <ScrollArea className="flex w-full grow">
        <div className="inline-flex w-full flex-col items-start justify-start gap-px p-2">
          {navigation.map(({ label, icon, path }) => (
            <NavItem
              label={label}
              path={path}
              icon={icon}
              key={label.split(" ").join("-").toLowerCase()}
            />
          ))}
        </div>
      </ScrollArea>
      <UserSettings />
      <UserProfile />
    </div>
  );
};

export const UserProfile = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-4  bg-blue-50 p-4">
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <LabelDescription label="Greg Hadala" description="hello@m87.design" />
      <DropdownCaret />
    </div>
  );
};

export const UserSettings = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-px border-b border-t border-slate-200 bg-blue-50 p-2">
      {settings.map(({ label, icon }) => (
        <NavItem
          label={label}
          icon={icon as IconType}
          key={label.split(" ").join("-").toLowerCase()}
        />
      ))}
    </div>
  );
};

const UserCompany = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-4 border-b border-slate-200 bg-blue-50 p-4">
      <Building2 />
      <LabelDescription label="M87" description="Marketing" />
      <DropdownCaret />
    </div>
  );
};

const DropdownCaret = ({ isOpen }: { isOpen?: boolean }) => {
  return (
    <ChevronDown
      className={cn("h-5 w-5 text-slate-500", !isOpen ?? "-scale-y-100")}
    />
  );
};
