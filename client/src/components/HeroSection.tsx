import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden z-10">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, bounce: 0.5, type: 'spring' }}
                className="relative z-20"
            >
                <h1 className="text-5xl md:text-8xl text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] mb-4 tracking-wide stroke-party-purple">
                    It's My Birthday!
                </h1>
                <div className="relative w-56 h-56 md:w-80 md:h-80 mx-auto my-8">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-4 border-dashed border-party-yellow rounded-full"
                    />
                    {/* Placeholder for the image - in a real app this would be imported */}
                    <img
                        src="/assets/cartoon_kid.png"
                        alt="Birthday Kid"
                        className="w-full h-full object-cover rounded-full border-8 border-white shadow-xl pointer-events-none"
                    />
                    {/* Sparkles overlay */}
                    <motion.div className="absolute -top-10 -right-10 text-4xl" animate="wiggle">✨</motion.div>
                    <motion.div className="absolute top-1/2 -left-12 text-4xl" animate="wiggle">🎉</motion.div>
                    <motion.div className="absolute -bottom-5 -right-5 text-4xl" animate="wiggle">🎈</motion.div>
                </div>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl md:text-4xl text-white font-bold drop-shadow-md"
                >
                    Come Join the Fun!
                </motion.p>
            </motion.div>

        </section>
    );
};

export default HeroSection;
