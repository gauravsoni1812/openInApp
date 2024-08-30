/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import img1 from "../assets/logo_and_company.svg";
import img2 from "../assets/burger-regular.png";
import img3 from "../assets/mobile_n.png";
import img4 from "../assets/img12.png";
import img5 from "../assets/plus.svg";
import img6 from "../assets/category.svg";
import img7 from "../assets/Chart_fill.png";
import img8 from "../assets/Ticket.svg";
import img9 from "../assets/Document.svg";
import img10 from "../assets/Notification.svg"
import img11 from "../assets/lole.svg"
import img12 from "../assets/Setting.svg"



const Navbar = () => {
    // State to control menu visibility
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <div className='relative flex justify-between h-16 p-5'>
            <div className='flex gap-3 justify-center items-center'>
                <img
                    src={img2}
                    alt="Menu Icon"
                    className='h-4 cursor-pointer'
                    onClick={toggleMenu}
                />
                <img src={img1} alt="Logo" className='h-8' />
            </div>

            {/* Menu Component */}
            <div
                className={`z-[100] fixed inset-0 bg-black bg-opacity-80 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} flex justify-center items-center`}>
                <div
                    className={`bg-white rounded-lg shadow-lg w-full h-full transition-transform duration-00 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={e => e.stopPropagation()}
                >
                    <div className='flex justify-between items-center p-5 h-16  w-full'>
                        <img src={img1} alt="" />
                        <img src={img5} alt="" className='h-4 w-5' onClick={() => setMenuOpen(false)} />

                    </div>
                    <ul className='flex flex-col gap-4 '>

                        <li className='text-[#9A9AA9]   p-5 '><div className='flex gap-3 items-center'><img src={img6} alt="" /><span> Dashboard</span></div> </li>
                        <li className='text-[#9A9AA9]   p-5 '><div className='flex gap-3 items-center'><img src={img8} alt="" /><span> Invoice </span></div> </li>
                        <li className='text-[#9A9AA9]   p-5 '><div className='flex gap-3 items-center'><img src={img9} alt="" /><span> Schedule </span></div> </li>
                        <li className='text-[#9A9AA9]   p-5 '><div className='flex gap-3 items-center'><img src={img11} alt="" /><span> Calender </span></div> </li>
                        <li className='text-[#9A9AA9]   p-5 '><div className='flex gap-3 items-center'><img src={img10} alt="" /><span> Notificaitons  </span></div> </li>
                        <li className='text-[#9A9AA9]   p-5 '><div className='flex gap-3 items-center'><img src={img12} alt="" /><span> Settings </span></div> </li>

                    </ul>
                </div>
            </div>

            <div className='flex gap-3 justify-center items-center'>
                <img src={img3} alt="Another Icon" className='h-5' />
                <img src={img4} alt="Profile" className='h-7 rounded-full' />
            </div>
        </div>
    );
};

export default Navbar;
