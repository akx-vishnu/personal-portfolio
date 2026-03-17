import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './ui/TiltCard';

const Certifications = () => {
    const certs = [
        { issuer: "IIT Bombay · Spoken Tutorial", name: "Bootstrap", score: "97.5%", icon: "🏛️", color: "text-orange-500" },
        { issuer: "IIT Bombay · EduPyramids", name: "Android & Kotlin", score: "95%", icon: "🤖", color: "text-green-500" },
        { issuer: "IIT Bombay · Spoken Tutorial", name: "Git", score: "93.3%", icon: "🔧", color: "text-red-500" },
        { issuer: "IIT Bombay · Spoken Tutorial", name: "Java", score: "87.5%", icon: "☕", color: "text-brown-500" },
        { issuer: "IIT Bombay · Spoken Tutorial", name: "R Programming", score: "82.5%", icon: "📊", color: "text-blue-500" },
        { issuer: "IIT Bombay · Spoken Tutorial", name: "Python", score: "75%", icon: "🐍", color: "text-yellow-500" },
        { issuer: "IIT Bombay · Spoken Tutorial", name: "PHP and MySQL", score: "75.00%", icon: "🐘", color: "text-blue-400" },
        { issuer: "IIT Bombay · Spoken Tutorial", name: "JavaScript", score: "70%", icon: "🌐", color: "text-yellow-400" },
        { issuer: "TaLim AI", name: "Prompt Engineering", icon: "🧠", color: "text-purple-500" },
        { issuer: "Corizo", name: "Web Development", score: "Oct - Nov 2024", icon: "💻", color: "text-blue-500" },
        { issuer: "Corizo", name: "Cybersecurity Training", icon: "🔒", color: "text-cyan-500" },
        { issuer: "KELTRON", name: "Python Programming Internship", score: "Apr - May 2025", icon: "🐍", color: "text-green-500" },
        { issuer: "MESKCON 2026", name: "Paper Presenter — EcoScan AI", icon: "🎤", color: "text-pink-500" }
    ];

    return (
        <div name="certifications" className="w-full min-h-screen bg-transparent text-white py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
                <div className="pb-12 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-neon-purple text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue uppercase tracking-wider"
                    >
                        Certifications
                    </motion.p>
                    <p className="py-6 text-gray-400 text-lg">Credentials and Achievements</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <TiltCard className="glass-card p-6 h-full border border-gray-700/50 hover:border-neon-purple/40 transition-all duration-300 cursor-default group">
                                <div className="flex items-start gap-4 h-full">
                                    <div className="text-4xl bg-gray-900/50 p-3 rounded-xl border border-gray-800 group-hover:bg-neon-purple/10 group-hover:border-neon-purple/30 transition-all duration-500 shrink-0">
                                        {cert.icon}
                                    </div>
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <span className="text-[10px] font-mono text-neon-purple uppercase tracking-widest block mb-1">{cert.issuer}</span>
                                            <h3 className="text-white font-bold leading-tight group-hover:text-neon-purple transition-colors duration-300">{cert.name}</h3>
                                        </div>
                                        {cert.score && (
                                            <div className="mt-4 flex items-center gap-2">
                                                <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: cert.score }}
                                                        transition={{ duration: 1, delay: 0.5 }}
                                                        className="bg-neon-purple h-full shadow-[0_0_8px_#6e3bff]"
                                                    />
                                                </div>
                                                <span className="text-xs font-mono text-neon-purple shrink-0">{cert.score}</span>
                                            </div>
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

export default Certifications;
