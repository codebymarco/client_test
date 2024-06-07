import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <header>Main Layout Header</header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer>Main Layout Footer</footer>
    </div>
  );
};

export default MainLayout;
