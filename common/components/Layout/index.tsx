import React, { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
 
  return (
    <div className="layout-container">
      <div className="flex min-h-screen bg-white">
        {/* {!notIncludeSidebar ? <Sidebar /> : null} */}
        <div className="block w-full">
          {/* <Header isShowToggleTheme={false} /> */}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
