import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { IconType } from "react-icons"; // Importing the IconType for icon types

interface MenuItem {
  title: string;
  path: string;
  icon: IconType;
}

interface MenuGroup {
  title: string;
  list: MenuItem[];
}

export const menuItems: MenuGroup[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: MdDashboard,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: MdSupervisedUserCircle,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: MdShoppingBag,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: MdAttachMoney,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: MdWork,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: MdAnalytics,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: MdPeople,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: MdOutlineSettings,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: MdHelpCenter,
      },
      {
        title: "Logout",
        path: "/auth/login",
        icon: MdLogout,
      },
    ],
  },
];
