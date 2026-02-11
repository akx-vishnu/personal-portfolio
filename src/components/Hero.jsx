import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
    return (
        <div
            name="hero"
            className="h-screen w-full bg-gradient-to-b from-primary via-primary to-secondary"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
                <div className="flex flex-col justify-center h-full w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-accent text-sm md:text-base font-semibold tracking-wider uppercase bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700 backdrop-blur-sm">
                                <FaMapMarkerAlt className="inline mr-1 mb-0.5" /> India
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-7xl font-bold text-white mb-2">
                            I'm <span className="text-accent">AKSHAJ V NAIR</span>
                        </h2>
                        <h3 className="text-2xl sm:text-4xl font-semibold text-gray-300 mb-6">
                            Modern Web Developer | React Specialist
                        </h3>

                        <p className="text-gray-400 py-4 max-w-lg text-lg leading-relaxed">
                            Crafting high-performance, UI/UX-focused React experiences for real-world businesses.
                            Passionate about building clean, efficient, and interactive web applications.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4">
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200 shadow-lg shadow-blue-500/20"
                            >
                                View Projects
                                <span className="group-hover:rotate-90 duration-300">
                                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                                </span>
                            </Link>

                            <a
                                href="/resume.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border border-gray-500 hover:border-accent hover:text-accent hover:bg-gray-800/30 cursor-pointer duration-200"
                            >
                                View Resume
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Optional: Add profile image here if available, or abstract graphic */}
                {/* <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
        >
             <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-accent to-purple-600 rounded-full blur-3xl opacity-20 absolute rotate-45"></div>
        </motion.div> */}
            </div>
        </div>
    );
};

export default Hero;
