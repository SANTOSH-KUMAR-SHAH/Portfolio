import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function MobileHero() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <section className="h-[85vh] flex flex-col justify-center relative overflow-hidden px-6">
            {/* Background ambient light */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                dragElastic={0.1}
                className="cursor-grab active:cursor-grabbing z-10"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="flex flex-col gap-2"
                >
                    <span className="text-primary font-mono text-sm tracking-widest uppercase">
                        Santosh Kumar Shah
                    </span>
                    <h1 className="text-6xl font-display font-black leading-[0.9] tracking-tighter text-light">
                        CREA<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-secondary to-accent">
                            TIVE
                        </span><br />
                        DEV.
                    </h1>
                </motion.div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-light/70 text-lg leading-relaxed max-w-[80%]"
            >
                I make the internet feel <span className="text-accent italic font-bold">alive</span>.
                <br />
                <span className="text-xs opacity-50 mt-2 block">(Try dragging the text above)</span>
            </motion.p>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-6 text-light/30"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
}
