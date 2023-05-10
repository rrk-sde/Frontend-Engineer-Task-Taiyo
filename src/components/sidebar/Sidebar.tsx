import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {

    let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isTabletMid) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isTabletMid]);

    const handleMenuClick = () => {
        setOpen(!open);
    };

    const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
        return {
            fontWeight: isActive ? "Bold" : "normal",
            borderBottom: isActive ? "8px solid green" : "",
            // backgroundColor: isActive ? "#555" : "",
            padding: isActive ? "6px 18px" : "6px 18px",
            color: isActive ? "cyan" : "white"
        }
    }

    const openClassName = `w-44 bg-red-200 min-h-screen z-90`

    const closeClassName = `absolute -left-48`

    return (
        <div className='fixed'>
            <div className="focus:ring md:hidden sidebar-toggle absolute font-thin text-3xl left-4 top-4"
                onClick={handleMenuClick}>
                {open ? (
                    <FiX className="sidebar-icon" />
                ) : (
                    <FiMenu className="sidebar-icon" />
                )}
            </div>
            <div ref={sidebarRef} className={`sidebar pt-16 flex flex-col gap-8 pl-4 ${open ? openClassName : closeClassName} `}>
                <div className="sidebar-header">
                    <h2 className='font-bold underline underline-offset-4'>Kaiyo Assignment</h2>
                </div>
                <div className="sidebar-menu flex flex-col gap-4">
                    <NavLink
                        to="/contact"

                        style={navLinkStyles}
                        className="sidebar-menu-item py-2 bg-gray-600 w-full"
                    // onClick={handleMenuClick}
                    >
                        <h1>Contact</h1>
                    </NavLink>
                    <NavLink
                        to="/maps"

                        style={navLinkStyles}
                        className="sidebar-menu-item py-2 bg-gray-600 w-full"
                    // onClick={handleMenuClick}
                    >
                        <h1>Maps</h1>
                    </NavLink>

                </div>

            </div>
        </div>
    )
}

export default Sidebar