"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
// import logo from "../../../public/logo.svg";

const navLinks = [
    {
        title: "About Me",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const NavBar = () => {
    const logo = "/images/logo1.png";
    const [navbarOpen, setnavbarOpen] = useState(false);
    return (
        <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2 relative'>
                    <Link href={'/'} className='logo'>
                            <Image href src={logo} alt="Logo" height={200} width={200} />
                    </Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        navbarOpen ? (
                            <button className='flex items-center px-3 py-2  border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white '>
                                <XMarkIcon className='h-5 w-5 text-white' onClick={() => setnavbarOpen(!navbarOpen)} />
                            </button>
                        ) : (
                            <button className='flex items-center px-3 py-2  border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white '>
                                <Bars3Icon className='h-5 w-5 text-white' onClick={() => setnavbarOpen(!navbarOpen)} />
                            </button>
                        )
                    }
                </div>
                    <div className='menu hidden md:block md:w-auto" id="navbar'>
                        <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                            {navLinks.map((link, index) => (
                                <NavLink key={index} href={link.path} title={link.title} />
                            ))}
                        </ul>
                    </div>
                </div>
            {navbarOpen ? (<MenuOverlay links={navLinks} />) : null}
        </nav>
    );
}

export default NavBar;
