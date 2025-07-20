import React from 'react';
import { SearchIcon, MenuIcon, NexusLogo } from './IconComponents';

interface HeaderProps {
  onMobileMenuClick: () => void;
  isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMobileMenuClick, isVisible }) => {
  return (
    <header 
      className={`fixed top-0 left-0 lg:left-64 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-zinc-900 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
            {/* Mobile Header: Logo on left, menu icon on right */}
            <div className="lg:hidden w-full flex items-center justify-between">
                <NexusLogo />
                <button onClick={onMobileMenuClick} className="text-gray-400 hover:text-white" aria-label="Open menu">
                    <MenuIcon />
                </button>
            </div>
            
            {/* Desktop Header: Search and Login on the right */}
            <div className="hidden lg:flex items-center justify-end w-full space-x-6">
                <button className="text-gray-400 hover:text-white" aria-label="Search">
                    <SearchIcon />
                </button>
                <a href="#" className="bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full py-2 px-5 text-sm font-semibold">
                    Log in
                </a>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
