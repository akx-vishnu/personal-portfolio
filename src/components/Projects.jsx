import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TiltCard from './ui/TiltCard'; // Import the new TiltCard

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
            className="w-full min-h-screen bg-primary text-white py-20 relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-neon-purple/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-neon-blue/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full z-10 relative">
                <div className="pb-12 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold inline border-b-4 border-neon-blue text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple"
                    >
                        Projects
                    </motion.h2>
                    <p className="py-6 text-gray-400 max-w-2xl text-lg">
                        Check out some of my recent work. Hover over the cards to interact.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 px-4 sm:px-0">
                    {projects.map(({ id, title, description, techStack, links, status }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: id * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <TiltCard className="h-full">
                                <div className="glass-card rounded-2xl p-8 flex flex-col h-full hover:shadow-neon duration-500 border border-gray-700/50 group bg-tertiary">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-3xl font-bold text-white group-hover:text-neon-blue duration-300">{title}</h3>
                                    </div>

                                    <p className="text-gray-400 mb-6 flex-grow font-light leading-relaxed text-sm md:text-base">
                                        {description}
                                    </p>

                                    {status && (
                                        <p className="text-xs text-yellow-400 mb-4 italic flex items-center">
                                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                                            {status}
                                        </p>
                                    )}

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-xs font-medium px-3 py-1 rounded-full bg-black-200 text-neon-blue border border-gray-700 group-hover:border-neon-blue/50 duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-auto z-20 relative transform translate-z-10">
                                        <a
                                            href={links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-6 py-3 rounded-lg border border-gray-600 hover:border-neon-blue hover:text-neon-blue hover:bg-neon-blue/10 flex items-center justify-center gap-2 transition-all duration-300 font-semibold"
                                        >
                                            <FaGithub size={20} /> Code
                                        </a>
                                        {links.demo && (
                                            <a
                                                href={links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-blue to-accent text-primary font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-blue/30 hover:scale-105 transition-all duration-300"
                                            >
                                                <FaExternalLinkAlt size={18} /> Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
