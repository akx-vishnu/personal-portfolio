import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'EcoScan AI',
            description: 'An AI-powered food analysis application that scans product labels to analyze ingredients, nutrition, and environmental impact, providing personalized health and eco scores.',
            techStack: ['React', 'Vite', 'Flask', 'FastAPI', 'SQLAlchemy', 'Tesseract OCR', 'Groq Llama-3'],
            links: {
                github: 'https://github.com/akx-vishnu/EcoScan-AI',
                demo: 'https://incondite-eschatological-lia.ngrok-free.dev/',
            },
            status: 'Development Site (ngrok)',
        },
        {
            id: 2,
            title: 'Peepul Tree School',
            description: 'A modern, nature-themed school website designed to improve admissions engagement through clean UI, smooth animations, and structured content for parents.',
            techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
            links: {
                github: 'https://github.com/akx-vishnu/Peepul-Tree-School',
                demo: 'https://peepul-tree-school.vercel.app/',
            },
        }
    ];

    return (
        <div
            name="projects"
            className="w-full min-h-screen bg-gradient-to-b from-secondary via-secondary to-primary text-white py-20"
        >
            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-accent">
                        Projects
                    </p>
                    <p className="py-6 text-gray-300">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0">
                    {projects.map(({ id, title, description, techStack, links, status }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-effect rounded-lg p-6 flex flex-col h-full hover:scale-[1.02] duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-3 text-accent">{title}</h3>
                            <p className="text-gray-300 mb-4 flex-grow font-light leading-relaxed">
                                {description}
                            </p>

                            {status && (
                                <p className="text-xs text-yellow-500 mb-2 italic">* {status}</p>
                            )}

                            <div className="flex flex-wrap gap-2 mb-6">
                                {techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-xs font-semibold px-2 py-1 rounded bg-gray-800 text-gray-300 border border-gray-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <a
                                    href={links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-1/2 px-6 py-2 duration-200 hover:scale-105 rounded-md border border-gray-500 hover:border-accent hover:text-accent hover:bg-gray-800/30 flex items-center justify-center gap-2"
                                >
                                    <FaGithub /> Code
                                </a>
                                {links.demo && (
                                    <a
                                        href={links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-1/2 px-6 py-2 duration-200 hover:scale-105 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                                    >
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
