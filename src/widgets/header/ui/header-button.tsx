import { EnterIcon } from "@/shared/ui/icons/exit-icon";
import React from "react";

export const HeaderButton = () => {
  return <EnterAction />;
};

const EnterAction = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      Вход <EnterIcon />
    </div>
  );
};
