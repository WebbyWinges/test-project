import { HeaderItem } from "./header-item";
import { Separator } from "../../../shared/ui/separator";

import { MenuItems } from "../../../shared/lib/constant/index";
import { LogoItem } from "@/shared/ui/logo";
import { HeaderButton } from "./header-button";
import { BurgerMenu } from "@/widgets/sidebar/ui/burger-menu";

export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-between h-[50px] ">
      <div className="flex flex-row justify-between p-4 w-full">
        <LogoItem />
        <div className=" hidden sm:flex flex-row gap-6">
          {MenuItems.map((item, index) => {
            return (
              <div key={index} className=" flex flex-ro">
                <HeaderItem name={item.name} link={item.link} />
              </div>
            );
          })}
        </div>
        <div className="hidden sm:block">
          <HeaderButton />
        </div>
        <div className="block sm:hidden">
          <BurgerMenu />
        </div>
      </div>
      <Separator className="mx-auto h-[1px] w-full rounded-md bg-zinc-300 dark:bg-zinc-700" />
    </div>
  );
};
