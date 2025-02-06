import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
