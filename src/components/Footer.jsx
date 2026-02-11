import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp, FaInstagram } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <footer className="bg-secondary text-white py-8 border-t border-gray-800">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold mb-2">AKSHAJ V NAIR</h2>
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a
                        href="https://github.com/akx-vishnu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors duration-300 text-2xl"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://in.linkedin.com/in/akx-vishnu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors duration-300 text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://instagram.com/akx_vishnu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors duration-300 text-2xl"
                    >
                        <FaInstagram />
                    </a>
                </div>

                <div
                    className="bg-accent p-3 rounded-full cursor-pointer hover:bg-blue-600 transition-colors duration-300"
                    onClick={toggleHome}
                >
                    <FaArrowUp className="text-white" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
