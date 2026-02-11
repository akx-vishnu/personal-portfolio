import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { id: 1, link: 'about' },
        { id: 2, link: 'skills' },
        { id: 3, link: 'projects' },
        { id: 4, link: 'services' },
        { id: 5, link: 'contact' },
    ];

    return (
        <nav
            className={`fixed w-full h-20 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="flex justify-between items-center w-full h-full px-4 md:px-12 text-white">
                <div>
                    <h1 className="text-3xl font-bold font-signature ml-2 cursor-pointer hover:text-accent transition-colors duration-300">
                        <Link to="hero" smooth={true} duration={500}>
                            Akshaj
                        </Link>
                    </h1>
                </div>

                <ul className="hidden md:flex">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-accent duration-200"
                        >
                            <Link to={link} smooth={true} duration={500} offset={-80}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden hover:text-accent transition-colors duration-200"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-primary to-secondary text-gray-300">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-accent duration-200"
                            >
                                <Link
                                    onClick={() => setNav(!nav)}
                                    to={link}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
