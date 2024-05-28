import { cn } from "@/lib/utils";
import { type LucideProps } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  type ForwardRefExoticComponent,
  type ReactNode,
  type RefAttributes,
} from "react";

export type IconType = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

interface INavItemProps {
  label: ReactNode;
  icon: IconType;
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
