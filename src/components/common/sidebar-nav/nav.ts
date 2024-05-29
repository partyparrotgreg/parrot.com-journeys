import {
  AppWindowMac,
  Bell,
  BoxIcon,
  BrushIcon,
  HelpCircle,
  HomeIcon,
  SlidersHorizontal,
  WavesIcon,
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
    label: "Start here",
    icon: HomeIcon,
    path: "/",
  },
  {
    label: "Wireframes",
    icon: BoxIcon,
    path: "/wireframes",
  },
  {
    label: "Figma Designs",
    icon: BrushIcon,
    path: "/figma",
  },
  {
    label: "Figma Prototype",
    icon: AppWindowMac,
    path: "/prototype",
  },
  {
    label: "Journeys",
    icon: WavesIcon,
    path: "/journeys",
  },
  // {
  //   label: "Sign-up forms",
  //   icon: FilesIcon,
  // },
  // {
  //   label: "Audience",
  //   icon: UserSquare2Icon,
  // },
  // {
  //   label: "Content",
  //   icon: AppWindowMacIcon,
  // },
  // {
  //   label: "Analytics",
  //   icon: BarChart2Icon,
  // },
];
