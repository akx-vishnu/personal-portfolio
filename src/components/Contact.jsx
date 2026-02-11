import React, { useState } from 'react';
import { FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Contact = () => {
    // ⚠️ REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzrF7tPhQMrKFWqFutpl5-LiqvbGWA_c_t7tGNfLRROBTRj606znY8k-vV01GQq0XfvQA/exec';

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setStatus('SUCCESS');
                form.reset();
            } else {
                setStatus('ERROR');
            }
        } catch (error) {
            console.error('Error!', error.message);
            setStatus('ERROR');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            name="contact"
            className="w-full min-h-screen bg-gradient-to-b from-secondary to-primary p-4 text-white"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8 text-center md:text-left">
                    <p className="text-4xl font-bold inline border-b-4 border-accent">
                        Contact
                    </p>
                    <p className="py-6 text-gray-300">Submit the form below to get in touch with me</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
                    {/* Left Column: Contact Info & Resume */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <div className="glass-effect p-6 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4 text-accent">Let's Connect</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="flex flex-col gap-4">
                                <a href="mailto:akx_vishnu@pm.me" className="flex items-center gap-4 hover:text-accent duration-300 group">
                                    <div className="bg-gray-800 p-3 rounded-full group-hover:bg-accent/20 transition-colors">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <span className="text-lg">akx_vishnu@pm.me</span>
                                </a>

                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-accent duration-300 group">
                                    <div className="bg-gray-800 p-3 rounded-full group-hover:bg-accent/20 transition-colors">
                                        <FaFileDownload size={20} />
                                    </div>
                                    <span className="text-lg">View Resume</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Key Form */}
                    <div className="w-full md:w-1/2 glass-effect p-6 rounded-lg">
                        <form onSubmit={handleSubmit} className="flex flex-col w-full">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="my-4 p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                required
                            />
                            <textarea
                                name="message"
                                rows="8"
                                placeholder="Enter your message"
                                className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                                required
                            ></textarea>

                            <button
                                disabled={loading}
                                className={`text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 mt-6 mx-auto md:mx-0 w-full rounded-md hover:scale-[1.02] duration-300 shadow-lg shadow-blue-500/20 font-medium ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'SUCCESS' && (
                                <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>
                            )}
                            {status === 'ERROR' && (
                                <p className="text-red-500 mt-4 text-center">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
