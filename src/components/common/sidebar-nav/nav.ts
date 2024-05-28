import {
  SlidersHorizontal,
  Bell,
  HelpCircle,
  HomeIcon,
  MailIcon,
  SendIcon,
  WavesIcon,
  FilesIcon,
  UserSquare2Icon,
  AppWindowMacIcon,
  BarChart2Icon,
} from "lucide-react";

export const settings = [
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

export const navigation = [
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
