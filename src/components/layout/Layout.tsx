import React from 'react';
import Header from '../Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
      <footer>
        <p>© 2024 The Blog</p>
      </footer>
    </div>
  );
};

export default Layout;