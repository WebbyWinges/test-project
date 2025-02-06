import React from "react";
import { LogoIcon } from "./icons/logo-icon";
import Link from "next/link";

export const LogoItem = () => {
  return (
    <Link
      href="/"
      className=" font-[400] text-4 flex items-center gap-4 leading-[150%]"
    >
      <LogoIcon /> <span className=" hidden sm:block">STEMPS</span>
    </Link>
  );
};
