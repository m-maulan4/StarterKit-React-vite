import Home from "@/layout/Home";
import Keuangan from "@/layout/Keuangan";
import type { RouterDataProps } from "./routerType";
import { HomeIcon } from "lucide-react";

const RouterNavMain: RouterDataProps[] = [
  {
    title: "Home",
    icon: HomeIcon,
    path: "/",
    component: Home,
    subMenu: false,
  },
  {
    title: "Keuangan",
    icon: HomeIcon,
    path: "keuangan",
    subMenu: true,
    items: [
      {
        title: "Laporan",
        path: "laporan",
        component: Keuangan,
      },
    ],
  },
];
export default RouterNavMain;
