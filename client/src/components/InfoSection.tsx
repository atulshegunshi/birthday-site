import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, User, Heart, Utensils } from 'lucide-react';

interface SectionProps {
    title: string;
    icon: React.ReactNode;
    content: string[];
    color: string;
}

const SectionCard: React.FC<SectionProps> = ({ title, icon, content, color }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            className={`w-full max-w-lg mx-auto mb-6 bg-white rounded-3xl shadow-lg border-b-8 overflow-hidden`}
            style={{ borderColor: color }}
        >
            <motion.button
                layout="position"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-white focus:outline-none"
            >
                <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full text-white`} style={{ backgroundColor: color }}>
                        {icon}
                    </div>
                    <h2 className={`text-2xl md:text-3xl text-gray-700`}>{title}</h2>
                </div>
                {isOpen ? <ChevronUp className="text-gray-400" size={32} /> : <ChevronDown className="text-gray-400" size={32} />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6"
                    >
                        <ul className="text-xl text-gray-600 space-y-2">
                            {content.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-2xl mt-1" style={{ color }}>•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const InfoSection: React.FC = () => {
    return (
        <section className="relative z-10 w-full px-4 pb-20 -mt-20">
            <SectionCard
                title="About Me"
                icon={<User size={24} />}
                content={["I'm turning 7!", "I love playing soccer and Lego.", "My favorite color is Blue."]}
                color="#38BDF8"
            />
            <SectionCard
                title="My Hobbies"
                icon={<Heart size={24} />}
                content={["Drawing cartoons.", "Riding my bike.", "Video games with dad."]}
                color="#C084FC"
            />
            <SectionCard
                title="What I Love to Eat"
                icon={<Utensils size={24} />}
                content={["Pizza (obviously!)", "Chocolate Cake", "Ice Cream Sundaes"]}
                color="#FB923C"
            />
        </section>
    );
};

export default InfoSection;
