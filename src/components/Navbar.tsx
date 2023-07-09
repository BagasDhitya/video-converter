import React from 'react';
import YoLogo from "../assets/logo.png"

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between w-screen h-16 bg-white shadow-md">
            <div className="ml-4">
                <a href="#" className="text-white font-bold text-xl">
                    <img
                        className='ml-5'
                        height={100}
                        width={200}
                        src={YoLogo}
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
