import { Header } from "@/widgets/header";
import React from "react";
import { SchoolTitle } from "./school-title";
import { Card } from "@/widgets/card";

export const SchoolPage = () => {
  return (
    <div>
      <Header />
      <SchoolTitle type={"Service"} />
      <Card />
    </div>
  );
};
