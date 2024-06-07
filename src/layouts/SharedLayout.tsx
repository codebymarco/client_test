import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const SharedLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Add shared layout components like headers, footers, etc. */}
      <header>Shared Header</header>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>

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
