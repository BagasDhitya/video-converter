import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between w-screen h-16 bg-red-700">
            <div className="ml-4">
                <a href="#" className="text-white font-bold text-xl">My App</a>
            </div>
        </nav>
    );
};

export default Navbar;
