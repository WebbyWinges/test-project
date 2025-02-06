"use client";

import { cn } from "../../../shared/lib/utils";
import { useRouter } from "next/navigation";

interface props {
  link: string;
  name: string;
}

export const HeaderItem = ({ link, name }: props) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`${link}`);
  };

  return (
    <button onClick={onClick}>
      <span
        className={cn("font-normal text-base leading-[150%] text-foreground")}
      >
        {name}
      </span>
    </button>
  );
};
