import { Card } from "@/shared/ui/card";
import { AnalyticIcon } from "@/shared/ui/icons";
import React from "react";
import { ICardItemProps } from "./card-item-props";

export const CardItem = ({ icon, title, description }: ICardItemProps) => {
  return (
    <Card className=" shadow-shadow-active flex flex-col justify-between gap-[56px] min-w-[412px]  max-w-[412px] w-full h-[256px]">
      <div className="flex gap-6 items-center">
        <span>{icon || <AnalyticIcon />}</span>
        <span className="text-[24px] leading-[116%] block sm:hidden">
          {title}
        </span>{" "}
      </div>
      <span className="hidden sm:block text-[32px] leading-[112.5%]">
        {title}
      </span>
      <span className="block sm:hidden text-[14px] leading-[142%] max-w-[326px]">
        {description}
      </span>
    </Card>
  );
};
