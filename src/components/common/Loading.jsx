import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
            <div className="relative">
                {/* Outer Ring */}
                <motion.div
                    className="w-20 h-20 border-4 border-info/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner Spinner */}
                <motion.div
                    className="absolute top-0 left-0 w-20 h-20 border-4 border-t-info border-r-transparent border-b-transparent border-l-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating Bubbles */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-3 h-3 bg-info rounded-full"
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{
                            x: [0, (i - 1) * 40],
                            y: [0, -40],
                            opacity: [0, 0.8, 0],
                            scale: [0.5, 1.2, 0.5]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </div>
            
            <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <h2 className="text-xl font-bold text-primary-text tracking-tight">Hang Tight</h2>
                <p className="text-sm text-secondary-text mt-1 font-medium">Preparing your professional workspace...</p>
            </motion.div>
        </div>
    );
};

export default Loading;
