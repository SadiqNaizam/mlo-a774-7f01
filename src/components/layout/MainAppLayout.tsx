import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Dashboard" />
        <main className="flex-1 overflow-y-auto bg-secondary/50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
