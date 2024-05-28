"use client";

import { cn } from "@/lib/utils";
import {
  AppWindowMacIcon,
  BarChart2Icon,
  Bell,
  Building2,
  ChevronDown,
  FilesIcon,
  HelpCircle,
  HomeIcon,
  MailIcon,
  SendIcon,
  SlidersHorizontal,
  UserSquare2Icon,
  WavesIcon,
  type LucideProps,
} from "lucide-react";
import {
  type ForwardRefExoticComponent,
  type ReactNode,
  type RefAttributes,
} from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";

const settings = [
  {
    label: "Preferences",
    icon: SlidersHorizontal,
  },
  {
    label: "Notifications",
    icon: Bell,
  },
  {
    label: "Support",
    icon: HelpCircle,
  },
];

const navigation = [
  {
    label: "Home",
    icon: HomeIcon,
    path: "/",
  },
  {
    label: "Inbox AI",
    icon: MailIcon,
  },
  {
    label: "Campaigns",
    icon: SendIcon,
  },
  {
    label: "Journeys",
    icon: WavesIcon,
    path: "/journeys",
  },
  {
    label: "Sign-up forms",
    icon: FilesIcon,
  },
  {
    label: "Audience",
    icon: UserSquare2Icon,
  },
  {
    label: "Content",
    icon: AppWindowMacIcon,
  },
  {
    label: "Analytics",
    icon: BarChart2Icon,
  },
];

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

interface INavItemProps {
  label: ReactNode;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  path?: string;
}

export const NavItem = ({ label, icon, path }: INavItemProps) => {
  // apply class to icon
  const pathname = usePathname();
  const isActive = path === pathname;
  const Icon = icon;
  return (
    <Link href={path ?? "/"} className="w-full">
      <div
        className={cn(
          isActive ? "bg-blue-100 text-blue-600" : "transparent",
          "group transition-all hover:cursor-pointer hover:bg-blue-100 active:translate-y-px",
          "inline-flex w-full grow select-none items-center justify-start gap-3 rounded-lg p-4",
        )}
      >
        <Icon
          className={cn(
            "h-5 w-5 group-hover:text-blue-600",
            isActive ? "text-blue-600" : "text-slate-600",
          )}
        />
        <div className="shrink grow basis-0 select-none  text-sm font-medium transition-all group-hover:text-blue-600">
          {label}
        </div>
      </div>
    </Link>
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
          icon={icon}
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

const LabelDescription = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => {
  return (
    <div className="inline-flex w-full shrink flex-col items-start justify-center">
      <div className="text-base font-bold text-slate-700">{label}</div>
      <div className="text-xs font-normal text-slate-500">{description}</div>
    </div>
  );
};
