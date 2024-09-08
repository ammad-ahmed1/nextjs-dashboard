import React from "react";
import { menuItems } from "@/utils/sider-items";
import { IconType } from "react-icons";
import SidebarItem from "./SidebarItem";
const Sidebar: React.FC = () => {
  console.log(menuItems);
  return (
    <div className="">
      <div className="p-20 bg-blue min-h-screen">
        {menuItems.map(
          (item: { title: string; list: any[] }, index: number) => (
            <div key={index}>
              <p className="text-gray text-base font-bold">{item.title}</p>
              {item.list.map(
                (
                  subItem: { title: string; path: string; icon: IconType },
                  subIndex: number
                ) => (
                  <SidebarItem
                    key={subIndex}
                    title={subItem.title}
                    path={subItem.path}
                    icon={subItem.icon}
                  />
                )
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
