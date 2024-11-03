// components/MainLayout.tsx
import React from 'react';
import Navbar from './Navbar'; // Pastikan path sesuai dengan letak file Navbar

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main> 
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
