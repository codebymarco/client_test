import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <div>
      {/* Dashboard Header */}
      <header>Dashboard Layout Header</header>

      {/* Sidebar */}
      <aside>Dashboard Layout Sidebar</aside>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Dashboard Footer */}
      <footer>Dashboard Layout Footer</footer>
    </div>
  );
};

export default DashboardLayout;
