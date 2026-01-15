import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import { useState } from 'react';

export function MobileMenu() {
    const [active, setActive] = useState('home');

    const navItems = [
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'work', icon: Briefcase, label: 'Work' },
        { id: 'about', icon: User, label: 'About' },
        { id: 'contact', icon: Mail, label: 'Hit Me Up' },
    ];

    return (
        <div className="fixed bottom-6 left-6 right-6 z-50">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
                className="bg-dark/80 backdrop-blur-xl border border-light/10 rounded-2xl p-2 shadow-2xl flex justify-between items-center px-6 h-16"
            >
                {navItems.map((item) => {
                    const isActive = active === item.id;
                    const Icon = item.icon;

                    const handleScroll = (id: string) => {
                        setActive(id);
                        const element = document.getElementById(id);
                        if (element) {
                            const offset = 80; // height of sticky header if any, or just buffer
                            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                            window.scrollTo({
                                top: elementPosition - offset,
                                behavior: 'smooth'
                            });
                        }
                    };

                    return (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className="relative flex flex-col items-center justify-center w-12 h-12"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-primary/10 rounded-xl"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <Icon
                                size={20}
                                className={`z-10 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-light/50'}`}
                            />
                            {isActive && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full"
                                />
                            )}
                        </button>
                    );
                })}
            </motion.nav>
        </div>
    );
}
