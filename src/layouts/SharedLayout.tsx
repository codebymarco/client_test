import React from 'react';
import { Routes } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const SharedLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Add shared layout components like headers, footers, etc. */}
      <header>Shared Header</header>

      {/* Render child routes */}
      <main>
        <Routes>{children}</Routes>
      </main>

      {/* Add shared layout components like footers, etc. */}
      <footer>Shared Footer</footer>
    </div>
  );
};

export default SharedLayout;
