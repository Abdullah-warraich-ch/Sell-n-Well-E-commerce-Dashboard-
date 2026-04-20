import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-primary flex items-center justify-center p-6">
            <div className="max-w-2xl w-full text-center space-y-8">
                <div className="relative inline-block">
                    {/* Background Decorative Blur */}
                    <div className="absolute inset-0 blur-3xl opacity-20 bg-info rounded-full -z-10 translate-y-10" />
                    
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-[12rem] font-black text-info/10 leading-none select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ 
                                    y: [0, -15, 0],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ 
                                    duration: 4, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Search className="w-24 h-24 text-info" strokeWidth={1.5} />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                <div className="space-y-4 relative">
                    <motion.h2 
                        className="text-4xl font-bold text-primary-text tracking-tight"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Something's Missing here
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-secondary-text max-w-md mx-auto leading-relaxed"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </motion.p>
                </div>

                <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-primary-text font-semibold hover:bg-secondary transition-all active:scale-95 group w-full sm:w-auto"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Go Back
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-button text-button-text font-semibold hover:shadow-xl hover:shadow-button/20 transition-all active:scale-95 group w-full sm:w-auto"
                    >
                        <Home className="w-5 h-5" />
                        Back to Dashboard
                    </button>
                </motion.div>

                {/* Subtle breadcrumb shadow */}
                <div className="pt-12 text-secondary-text/30 text-xs font-medium uppercase tracking-[0.2em]">
                    Sell-N-Well E-Commerce Dashboard
                </div>
            </div>
        </div>
    );
};

export default NotFound;
