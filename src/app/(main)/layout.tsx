import { SchoolPage } from "@/pages/school/ui/school";

import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <main>
        <SchoolPage />
      </main>
    </div>
  );
};

export default MainLayout;
