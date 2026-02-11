import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBusinessTime, FaUniversity, FaUserTie, FaCalendarAlt, FaBoxOpen, FaProjectDiagram } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Landing Pages',
            icon: <FaLaptopCode size={40} className="text-accent" />,
            description: 'High-converting, fast-loading landing pages built with React and Tailwind CSS to maximize your marketing campaigns.',
        },
        {
            id: 2,
            title: 'Business Websites',
            icon: <FaBusinessTime size={40} className="text-secondary" />,
            description: 'Professional websites for businesses of all sizes, featuring responsive layouts, SEO optimization, and easy content management.',
        },
        {
            id: 3,
            title: 'School / Institution Sites',
            icon: <FaUniversity size={40} className="text-green-500" />,
            description: 'Structured, informative, and accessible websites for educational institutions, designed to engage students and parents.',
        },
        {
            id: 4,
            title: 'Portfolio Sites',
            icon: <FaUserTie size={40} className="text-yellow-500" />,
            description: 'Personalized portfolio websites to showcase your skills, projects, and experience in a professional and visually appealing way.',
        },
        {
            id: 5,
            title: 'Event Pages',
            icon: <FaCalendarAlt size={40} className="text-red-500" />,
            description: 'Dynamic event pages with registration forms, schedules, and countdowns to build excitement and drive attendance.',
        },
        {
            id: 6,
            title: 'Product Showcases',
            icon: <FaBoxOpen size={40} className="text-purple-500" />,
            description: 'Attractive product showcase pages with high-quality images, detailed descriptions, and smooth animations to highlight features.',
        },
        {
            id: 7,
            title: 'College Projects',
            icon: <FaProjectDiagram size={40} className="text-pink-500" />,
            description: 'Assistance with college second year and final year projects, including documentation, coding, and implementation.',
        },
    ];

    return (
        <div
            name="services"
            className="w-full min-h-screen bg-gradient-to-b from-primary via-primary to-secondary text-white py-20"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-accent">
                        Services
                    </p>
                    <p className="py-6 text-gray-300">Here's what I can do for you</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {services.map(({ id, title, icon, description }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-effect shadow-md shadow-accent/20 rounded-lg p-6 flex flex-col items-center text-center hover:bg-gray-800/50 duration-300"
                        >
                            <div className="mb-4 bg-white/10 p-4 rounded-full">
                                {icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
