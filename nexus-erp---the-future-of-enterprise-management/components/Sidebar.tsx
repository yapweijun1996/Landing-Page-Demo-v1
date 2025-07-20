import React from 'react';
import { NexusLogo, CloseIcon } from './IconComponents';

const navItems = [
    'Research', 'Safety', 'For Business', 'ChatGPT', 'Sora',
    'API Platform', 'Stories', 'Company', 'News'
];

const SidebarLink = ({ text, active = false }: { text: string; active?: boolean }) => (
    <a href="#" className={`block text-md py-1.5 transition-colors ${active ? 'text-white font-medium' : 'text-gray-400 hover:text-white'}`}>
        {text}
    </a>
);

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {
    return (
        <React.Fragment>
            {/* Desktop Sidebar (static) */}
            <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 bg-black p-8 border-r border-zinc-900">
                <div className="h-12 mb-8 flex items-center">
                    <NexusLogo />
                </div>
                <nav className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                        <SidebarLink key={item} text={item} active={item === 'Research'} />
                    ))}
                </nav>
            </aside>

            {/* Mobile Sidebar (overlay with transition) */}
            <div className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/60" onClick={() => setIsOpen(false)}></div>
                
                {/* Sidebar Content */}
                <div className={`relative z-10 flex flex-col w-64 h-full bg-black p-8 border-r border-zinc-900 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex justify-between items-center h-12 mb-8">
                        <NexusLogo />
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white" aria-label="Close menu">
                            <CloseIcon />
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-2">
                        {navItems.map((item) => (
                            <SidebarLink key={item} text={item} active={item === 'Research'} />
                        ))}
                    </nav>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Sidebar;