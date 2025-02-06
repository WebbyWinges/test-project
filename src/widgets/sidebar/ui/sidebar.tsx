import { Separator } from "@/shared/ui/separator";
import { SidebarItem } from "./sidebar-item";
import { ScrollArea } from "@/shared/ui/scroll-area";

import { MenuItems } from "@/shared/lib/constant";

export const Sidebar = ({}) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between space-y-4 bg-[#f5f5f5] py-3 text-primary dark:bg-[#1E1F22]">
      <div className="flex flex-col gap-3">
        <div>
          {MenuItems.map((item, index) => {
            return (
              <div key={index}>
                <SidebarItem name={item.name} link={item.link} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
