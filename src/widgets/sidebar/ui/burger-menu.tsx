import React from "react";
import { Sidebar } from "./sidebar";
import { Sheet, SheetContent, SheetTrigger } from "../../../shared/ui/sheet";
import { Button } from "../../../shared/ui/button";
import { Menu } from "lucide-react";

export const BurgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button className=" !py-[4px] text-base h-[28px] !px-[8px]">
          Меню
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex gap-0 p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
