import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaPython, FaWindowMaximize } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiMysql, SiFlask, SiMicrosoftexcel, SiFastapi, SiMicrosoftword, SiMicrosoftpowerpoint } from 'react-icons/si';

const Skills = () => {
    const skills = [
        {
            id: 1,
            name: 'HTML',
            icon: <FaHtml5 className="text-orange-500" />,
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            name: 'CSS',
            icon: <FaCss3Alt className="text-blue-500" />,
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            name: 'JavaScript',
            icon: <span className="font-bold text-yellow-500 text-3xl">JS</span>, // React icons doesn't have a simple JS icon sometimes, or use SiJavascript
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            name: 'React',
            icon: <FaReact className="text-cyan-400" />,
            style: 'shadow-cyan-400',
        },
        {
            id: 5,
            name: 'Tailwind',
            icon: <SiTailwindcss className="text-sky-400" />,
            style: 'shadow-sky-400',
        },
        {
            id: 6,
            name: 'Node.js',
            icon: <FaNodeJs className="text-green-500" />,
            style: 'shadow-green-500',
        },
        {
            id: 7,
            name: 'Python',
            icon: <FaPython className="text-yellow-400" />,
            style: 'shadow-yellow-400',
        },
        {
            id: 8,
            name: 'Java',
            icon: <FaJava className="text-red-500" />,
            style: 'shadow-red-500',
        },
        {
            id: 9,
            name: 'Flutter',
            icon: <SiFlutter className="text-cyan-500" />,
            style: 'shadow-cyan-500',
        },
        {
            id: 10,
            name: 'MySQL',
            icon: <SiMysql className="text-blue-500" />,
            style: 'shadow-blue-500',
        },
        {
            id: 11,
            name: 'Tkinter',
            icon: <FaWindowMaximize className="text-gray-400" />,
            style: 'shadow-gray-400',
        },
        {
            id: 12,
            name: 'Flask',
            icon: <SiFlask className="text-white" />,
            style: 'shadow-white',
        },
        {
            id: 13,
            name: 'Excel',
            icon: <SiMicrosoftexcel className="text-green-500" />,
            style: 'shadow-green-500',
        },
        {
            id: 14,
            name: 'FastAPI',
            icon: <SiFastapi className="text-teal-500" />,
            style: 'shadow-teal-500',
        },
        {
            id: 15,
            name: 'Word',
            icon: <SiMicrosoftword className="text-blue-500" />,
            style: 'shadow-blue-500',
        },
        {
            id: 16,
            name: 'PowerPoint',
            icon: <SiMicrosoftpowerpoint className="text-orange-500" />,
            style: 'shadow-orange-500',
        }
    ];

    return (
        <div
            name="skills"
            className="w-full min-h-screen bg-gradient-to-b from-primary via-primary to-secondary text-white py-20"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-accent inline">
                        Skills
                    </p>
                    <p className="py-6 text-gray-300 text-lg">
                        These are the technologies I've worked with
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {skills.map(({ id, name, icon, style }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg glass-effect ${style}`}
                        >
                            <div className="text-5xl mx-auto w-fit mb-4">{icon}</div>
                            <p className="mt-4 font-semibold uppercase tracking-wider">{name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
