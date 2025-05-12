import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

const MainLayout = ({ children }) => {
  return (
    <div className="mt-20">
      <Suspense fallback={<BarLoader width={"100%"} color="#36d7b7" />}>
        {children}
      </Suspense>
    </div>
  );
};

export default MainLayout;
