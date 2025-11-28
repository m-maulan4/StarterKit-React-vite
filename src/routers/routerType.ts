import type { LucideIcon } from "lucide-react";

export interface RouterDataProps {
  title: string;
  icon: LucideIcon;
  path: string;
  component?: React.ComponentType;
  subMenu: boolean;
  items?: {
    title: string;
    path: string;
    component: React.ComponentType;
  }[];
}
