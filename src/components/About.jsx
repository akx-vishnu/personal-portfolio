import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div
            name="about"
            className="w-full min-h-screen bg-primary text-white py-20 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
                <div className="pb-8">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-neon-blue text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple"
                    >
                        About
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 rounded-2xl border border-gray-700/50 shadow-card"
                >
                    <p className="text-xl mt-4 leading-loose text-gray-300">
                        I am a B.Sc. Computer Science student focused on building modern, fast, and responsive web applications using React.
                        My journey in development is driven by a passion for clean UI, smooth UX, and performance optimization.
                    </p>

                    <br />

                    <p className="text-xl leading-loose text-gray-300">
                        Currently, I am expanding my portfolio and aiming to work with freelance clients while seeking a developer role after graduation.
                        I enjoy solving complex problems and turning ideas into functional, aesthetically pleasing digital experiences.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
